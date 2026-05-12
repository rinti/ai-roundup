#!/bin/bash
cd /Users/andreas/dev/ai-roundup

TODAY=$(date +%Y-%m-%d)
MAX_ATTEMPTS=3
RETRY_DELAY=180

for attempt in $(seq 1 "$MAX_ATTEMPTS"); do
    echo "=== Attempt $attempt/$MAX_ATTEMPTS for $TODAY at $(date) ==="
    /Users/andreas/.local/bin/claude --chrome -p "Read TASK.md and execute it" --allowedTools 'Bash(*)' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'mcp__claude-in-chrome__*'

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
