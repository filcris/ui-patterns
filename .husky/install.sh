#!/bin/sh
# Evita erro no GitHub Actions (sem .git)
if [ -d ".git" ]; then
  npx husky install
else
  echo "🟡 Husky skipped (no .git directory)"
fi
