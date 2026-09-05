#!/usr/bin/env python3
"""Fetch a Nitter thread and print the main post plus visible replies.

Plain curl currently gets an empty 200 from nitter.net for status pages. The
same pages are server-rendered HTML when fetched with Safari's TLS fingerprint,
which curl_cffi can impersonate without browser automation.
"""

from __future__ import annotations

import argparse
import os
import json
import re
import sys
from dataclasses import asdict, dataclass
from html.parser import HTMLParser
from pathlib import Path
from typing import Callable
from urllib.parse import urljoin, urlparse, urlunparse

REPO_ROOT = Path(__file__).resolve().parents[1]
LOCAL_DEPS = REPO_ROOT / ".roundup-python"
if LOCAL_DEPS.exists():
    sys.path.insert(0, str(LOCAL_DEPS))

try:
    from curl_cffi import requests
except ImportError:
    sys.exit(
        "Missing dependency: curl_cffi. Install with "
        "`python3 -m pip install --target .roundup-python -r requirements-roundup.txt` "
        "and run with `PYTHONPATH=.roundup-python`."
    )


NITTER_BASE = os.environ.get("NITTER_BASE", "https://nitter.net").rstrip("/")
NITTER_HOST = urlparse(NITTER_BASE).netloc
VOID_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}
BLOCK_TAGS = {"blockquote", "div", "footer", "h1", "h2", "h3", "li", "p", "section"}
STAT_LABELS = ("replies", "retweets", "likes", "views")


@dataclass
class Tweet:
    author: str
    username: str
    url: str
    date: str
    text: str
    replying_to: str
    stats: dict[str, str]
    quote: str = ""


class Node:
    def __init__(self, tag: str, attrs: list[tuple[str, str | None]] | None = None) -> None:
        self.tag = tag
        self.attrs = {key: value or "" for key, value in (attrs or [])}
        self.children: list[Node | str] = []

    def attr(self, name: str) -> str:
        return self.attrs.get(name, "")

    def has_class(self, class_name: str) -> bool:
        return class_name in self.attr("class").split()


class NitterHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.root = Node("document")
        self.stack = [self.root]

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_endtag(self, tag: str) -> None:
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data: str) -> None:
        if data:
            self.stack[-1].children.append(data)


def descendants(node: Node) -> list[Node]:
    found: list[Node] = []
    for child in node.children:
        if isinstance(child, Node):
            found.append(child)
            found.extend(descendants(child))
    return found


def first(node: Node, predicate: Callable[[Node], bool]) -> Node | None:
    for child in descendants(node):
        if predicate(child):
            return child
    return None


def find_all(node: Node, predicate: Callable[[Node], bool]) -> list[Node]:
    return [child for child in descendants(node) if predicate(child)]


def text_content(node: Node | None) -> str:
    if node is None:
        return ""

    parts: list[str] = []

    def walk(item: Node | str) -> None:
        if isinstance(item, str):
            parts.append(item)
            return
        if item.tag == "br":
            parts.append("\n")
            return
        for child in item.children:
            walk(child)
        if item.tag in BLOCK_TAGS:
            parts.append("\n")

    walk(node)
    text = "".join(parts)
    lines = [re.sub(r"[ \t\r\f\v]+", " ", line).strip() for line in text.splitlines()]
    return "\n".join(line for line in lines if line).strip()


def normalize_nitter_url(url: str) -> str:
    if not url.startswith(("http://", "https://")):
        url = urljoin(NITTER_BASE, url)

    parsed = urlparse(url)
    host = parsed.netloc.lower()
    if host in {"x.com", "twitter.com", "mobile.twitter.com"}:
        return urlunparse(("https", NITTER_HOST, parsed.path, "", parsed.query, parsed.fragment))
    if "nitter" not in host and host != NITTER_HOST:
        raise ValueError(f"Expected a nitter or x.com status URL, got: {url}")
    return urlunparse(("https", NITTER_HOST, parsed.path, "", parsed.query, parsed.fragment))


def to_x_url(href: str, fallback_url: str) -> str:
    if not href:
        href = fallback_url
    parsed = urlparse(urljoin(NITTER_BASE, href))
    return urlunparse(("https", "x.com", parsed.path, "", "", ""))


def parse_tweet(item: Node, page_url: str) -> Tweet | None:
    content = first(item, lambda node: node.has_class("tweet-content"))
    if content is None:
        return None

    username = item.attr("data-username")
    username_node = first(item, lambda node: node.has_class("username"))
    if not username and username_node:
        username = text_content(username_node).lstrip("@")

    author_node = first(item, lambda node: node.has_class("fullname"))
    author = author_node.attr("title") if author_node else ""
    if not author:
        author = text_content(author_node)

    date_link = first(item, lambda node: node.tag == "a" and bool(node.attr("href")) and "/status/" in node.attr("href"))
    tweet_link = first(item, lambda node: node.tag == "a" and node.has_class("tweet-link"))
    href = tweet_link.attr("href") if tweet_link else date_link.attr("href") if date_link else ""

    date_node = first(item, lambda node: node.has_class("tweet-date"))
    date_anchor = first(date_node, lambda node: node.tag == "a") if date_node else None
    date = date_anchor.attr("title") if date_anchor else text_content(date_node)

    replying_to = text_content(first(item, lambda node: node.has_class("replying-to")))

    stats_node = first(item, lambda node: node.has_class("tweet-stats"))
    stat_values = [text_content(node) for node in find_all(stats_node, lambda node: node.has_class("tweet-stat"))]
    stats = {
        label: value
        for label, value in zip(STAT_LABELS, stat_values)
        if value
    }

    quote_text = text_content(first(item, lambda node: node.has_class("quote-text")))

    return Tweet(
        author=author,
        username=username,
        url=to_x_url(href, page_url),
        date=date,
        text=text_content(content),
        replying_to=replying_to,
        stats=stats,
        quote=quote_text,
    )


def parse_thread(html: str, page_url: str) -> tuple[Tweet | None, list[Tweet], str]:
    parser = NitterHTMLParser()
    parser.feed(html)
    root = parser.root

    main_container = first(root, lambda node: node.attr("id") == "m")
    replies_container = first(root, lambda node: node.attr("id") == "r")

    main_tweet = None
    if main_container:
        main_item = first(main_container, lambda node: node.has_class("timeline-item"))
        main_tweet = parse_tweet(main_item, page_url) if main_item else None

    replies: list[Tweet] = []
    if replies_container:
        for item in find_all(replies_container, lambda node: node.has_class("timeline-item")):
            tweet = parse_tweet(item, page_url)
            if tweet:
                replies.append(tweet)

    load_more = ""
    show_more = first(root, lambda node: node.has_class("show-more"))
    if show_more:
        more_link = first(show_more, lambda node: node.tag == "a" and bool(node.attr("href")))
        if more_link:
            load_more = urljoin(page_url, more_link.attr("href"))

    return main_tweet, replies, load_more


def fetch_html(url: str, timeout: int, impersonate: str) -> str:
    response = requests.get(
        url,
        impersonate=impersonate,
        timeout=timeout,
        headers={"Accept-Language": "en-US,en;q=0.9"},
    )
    response.raise_for_status()
    if not response.text.strip():
        raise RuntimeError(
            f"Nitter returned an empty body for {url}. "
            "Safari impersonation may have stopped working."
        )
    return response.text


def fetch_thread(url: str, pages: int, timeout: int, impersonate: str) -> dict:
    current_url = normalize_nitter_url(url)
    main: Tweet | None = None
    replies: list[Tweet] = []
    seen_urls: set[str] = set()
    load_more = ""

    for page in range(max(1, pages)):
        html = fetch_html(current_url, timeout, impersonate)
        page_main, page_replies, next_url = parse_thread(html, current_url)
        if main is None and page_main:
            main = page_main
        for reply in page_replies:
            if reply.url not in seen_urls:
                seen_urls.add(reply.url)
                replies.append(reply)
        load_more = next_url
        if not load_more:
            break
        current_url = load_more

    return {
        "nitter_url": normalize_nitter_url(url),
        "x_url": to_x_url(normalize_nitter_url(url), normalize_nitter_url(url)),
        "main": asdict(main) if main else None,
        "replies": [asdict(reply) for reply in replies],
        "load_more": load_more,
    }


def format_stats(stats: dict[str, str]) -> str:
    if not stats:
        return ""
    return " [" + ", ".join(f"{key}: {value}" for key, value in stats.items()) + "]"


def format_tweet(tweet: dict, index: int | None = None) -> str:
    prefix = f"{index}. " if index is not None else "- "
    handle = f"@{tweet['username']}" if tweet["username"] else "@?"
    header = f"{prefix}{tweet['author']} ({handle})"
    if tweet["date"]:
        header += f" - {tweet['date']}"
    header += format_stats(tweet["stats"])

    lines = [header, f"   {tweet['url']}"]
    if tweet["replying_to"]:
        lines.append(f"   {tweet['replying_to']}")
    lines.append(indent_text(tweet["text"]))
    if tweet["quote"]:
        lines.append("   Quote:")
        lines.append(indent_text(tweet["quote"], prefix="   > "))
    return "\n".join(lines)


def indent_text(text: str, prefix: str = "   ") -> str:
    return "\n".join(prefix + line for line in text.splitlines())


def print_text(thread: dict) -> None:
    print(f"Thread: {thread['x_url']}")
    print(f"Nitter: {thread['nitter_url']}")
    print()
    print("Main:")
    if thread["main"]:
        print(format_tweet(thread["main"]))
    else:
        print("- No main tweet parsed")

    print()
    print(f"Replies ({len(thread['replies'])} parsed):")
    for index, reply in enumerate(thread["replies"], start=1):
        print(format_tweet(reply, index=index))
        print()

    if thread["load_more"]:
        print(f"Load more: {thread['load_more']}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("url", help="Nitter or x.com status URL")
    parser.add_argument("--pages", type=int, default=1, help="number of Nitter reply pages to fetch")
    parser.add_argument("--timeout", type=int, default=30, help="request timeout in seconds")
    parser.add_argument("--impersonate", default="safari17_0", help="curl_cffi impersonation profile")
    parser.add_argument("--json", action="store_true", help="emit structured JSON")
    parser.add_argument("--raw-html", action="store_true", help="print fetched HTML for the first page")
    args = parser.parse_args()

    try:
        if args.raw_html:
            print(fetch_html(normalize_nitter_url(args.url), args.timeout, args.impersonate))
            return 0

        thread = fetch_thread(args.url, args.pages, args.timeout, args.impersonate)
    except Exception as error:
        print(f"fetch-nitter-thread: {error}", file=sys.stderr)
        return 1

    if args.json:
        print(json.dumps(thread, ensure_ascii=False, indent=2))
    else:
        print_text(thread)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
