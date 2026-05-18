# gabies-personal

Gabrielle Uy's personal site — built with Astro, deployed to GitHub Pages at **gabieuy.com**.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Write a notebook entry

Add a markdown file to `src/content/notes/`:

```markdown
---
title: Your title
date: 2026-04-12
tags: [detection]
summary: One-line summary that shows on cards.
location: Optional — for travel entries
---

Body here.
```

Valid tags: `detection · postmortem · talk · travel · photo · journal · bella`

The filename becomes the URL slug — e.g. `2026-04-edr-cried-wolf.md`
→ `/notebook/2026-04-edr-cried-wolf/`.

## Deploy

Pushes to `main` build and deploy via GitHub Actions. Make sure Pages source is set
to "GitHub Actions" in repo Settings → Pages, and that the custom domain is
`gabieuy.com`.
