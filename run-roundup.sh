#!/bin/bash
cd /Users/andreas/dev/ai-roundup
/Users/andreas/.local/bin/claude --chrome -p "Read TASK.md and execute it" --allowedTools 'Bash(*)' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'mcp__claude-in-chrome__*'
