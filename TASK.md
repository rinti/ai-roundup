I want you to scan the following accounts for interesting AI discussion, videos or news (within the last 24 hours, since this is a daily scheduled task. You can bend the rules on the 24 hours if there's still interesting discussions going on in a thread/topic older than 24 hours old). I'm mostly interested in agentic and code related AI stuff, but if there's other stuff add it as a separate section in the final file.

## Accounts to scan

https://nitter.net/mattpocockuk/
https://nitter.net/theo/
https://nitter.net/trq212/
https://nitter.net/LLMJunky/
https://nitter.net/mitsuhiko/
https://nitter.net/bcherny/
https://nitter.net/steipete/
https://nitter.net/swyx/
https://nitter.net/simonw/
https://nitter.net/karpathy/
https://nitter.net/jerryjliu0/
https://nitter.net/potetotes/

## How to fetch data

### Step 1: Get recent posts via RSS (fast, parallel)

Use `curl` via Bash to fetch RSS feeds in parallel for all accounts. The RSS endpoint is the account URL + `/rss`, e.g.:

```
curl -s -L -A "Mozilla/5.0" "https://nitter.net/karpathy/rss"
```

This returns XML with recent posts, quoted tweets, and the author's own thread replies. WebFetch and direct HTML pages on nitter return empty content — only RSS and browser automation work.

### Step 2: Get thread discussions via Chrome browser

RSS only gives posts by the account owner. To see replies and discussions from other people, use Chrome browser automation (mcp__claude-in-chrome tools) to load individual thread pages on nitter:

1. Call `tabs_context_mcp` to get/create a tab
2. Navigate to the thread URL, e.g. `https://nitter.net/karpathy/status/2042334451611693415`
3. Call `get_page_text` to extract the full thread with all replies

Do this for threads that look interesting/high-engagement based on the RSS data. Focus on threads with substantive discussion, not just hype replies.

### Link format

When linking to posts in the report, use x.com URLs (not nitter), e.g.:
`https://x.com/karpathy/status/2042334451611693415`

## Output

When you find interesting threads please summarize them and also link to them. Link to relevant videos with a small description. Link to relevant news articles that might be linked with a short description and where you found it.

Create the report as YYYY-MM-DD-title-as-a-slug.md where the title should be somewhat descriptive of the data.

After creating the report, update README.md by adding a new row at the TOP of the table (latest first) with the date, a link to the .md file, and a short one-line summary.

Then commit and push. Don't ask me for permission.
