# CLAUDE.md

@AGENTS.md

# Behavioral Rules
1. Think before acting. Read existing files before writing code.
2. Be concise in output but thorough in reasoning.
3. Prefer editing over rewriting whole files.
4. Do not re-read files you have already read unless the file may have changed.
5. Test your code before declaring done (run `npx tsc --noEmit`).
6. No sycophantic openers or closing fluff.
7. Keep solutions simple and direct. No speculative abstractions.
8. User instructions always override this file.

---

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm start        # run server at http://localhost:3000
npm test         # run tests (placeholder — prints "Tests passed successfully")
```

## Architecture

This is a minimal Node.js/Express static file server with a frontend-only web app.

- `server.js` — Express server that serves `public/` as static files on port 3000. No API routes.
- `public/index.html` — Single-page Motivation Message App; all styling is inline.
- `public/script.js` — Client-side only; picks a random motivational message from a hardcoded array on button click.

## CI/CD Pipeline

`.github/workflows/ci.yml` runs on every push to `main`:
1. Installs dependencies with `npm ci`
2. Runs `npm test`
3. Deploys to Azure Web App `ejmp-pipeline-app` using `AZURE_WEBAPP_PUBLISH_PROFILE` secret
