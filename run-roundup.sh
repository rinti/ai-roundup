#!/bin/bash
cd /Users/andreas/dev/ai-roundup

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

TODAY=$(date +%Y-%m-%d)
MAX_ATTEMPTS=3
RETRY_DELAY=180
PYTHON_BIN="${PYTHON_BIN:-$(command -v python3)}"
PYTHON_DEPS_DIR="$PWD/.roundup-python"

if [ -z "$PYTHON_BIN" ]; then
    echo "=== python3 not found; cannot fetch Nitter threads ==="
    exit 1
fi

if ! PYTHONPATH="$PYTHON_DEPS_DIR" "$PYTHON_BIN" -c 'import curl_cffi' >/dev/null 2>&1; then
    echo "=== Installing roundup Python dependencies ==="
    "$PYTHON_BIN" -m pip install --quiet --target "$PYTHON_DEPS_DIR" -r requirements-roundup.txt
fi

export PYTHONPATH="$PYTHON_DEPS_DIR${PYTHONPATH:+:$PYTHONPATH}"
export AI_ROUNDUP_PYTHON="$PYTHON_BIN"


for attempt in $(seq 1 "$MAX_ATTEMPTS"); do
    echo "=== Attempt $attempt/$MAX_ATTEMPTS for $TODAY at $(date) ==="
    /Users/andreas/.local/bin/claude -p "Read TASK.md and execute it" --allowedTools 'Bash(*)' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch'

    if compgen -G "roundups/${TODAY}-*.md" >/dev/null; then
        echo "=== Roundup file for $TODAY produced; done ==="
        exit 0
    fi

    if [ "$attempt" -lt "$MAX_ATTEMPTS" ]; then
        echo "=== No roundup for $TODAY yet; sleeping ${RETRY_DELAY}s before retry ==="
        sleep "$RETRY_DELAY"
    fi
done

echo "=== Failed to produce a roundup for $TODAY after $MAX_ATTEMPTS attempts ==="
exit 1
