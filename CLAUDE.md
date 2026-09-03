# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo contains a single Angular app under `gadijkhuis/` (there is no root-level `package.json`). Run all commands below from `gadijkhuis/`.

## Commands

- `npm start` (or `ng serve`) — dev server
- `npm run build` (or `ng build`) — production SSR build, output to `dist/gadijkhuis`
- `npm run watch` — development build with watch mode
- `npm test` (or `ng test`) — Karma unit tests. No `.spec.ts` files exist yet in this repo.
- `node dist/gadijkhuis/server/server.mjs` — run the built SSR server locally

## Architecture

This is a personal portfolio/CV site: standalone-components Angular 20, zoneless change detection (`provideZonelessChangeDetection`), with SSR + hydration (event replay) via `provideClientHydration`. There is a single route (`app.routes.ts`) that loads `HomeLayoutComponent`, which assembles the page from `contentblocks/*` and `components/base/*`.

### Content and i18n

All copy lives in `src/app/models/content/content.ts` as a static `Content` class with `Localized<T>` fields, where `Localized<T> = { default: T } & Record<string, T>`. There is no i18n library — this hand-rolled model is the whole system:

- `LanguageService` (`src/app/services/language.service.ts`) holds the current language code in a signal. It's detected in this priority order: stored `localStorage` value → the region part of `navigator.language` → `'default'`. It's SSR-safe: all `localStorage`/`navigator` access is guarded by `isPlatformBrowser(PLATFORM_ID)`, so on the server it always resolves to `'default'`.
- `ContentService.resolve(entry)` (`src/app/services/content.service.ts`) is the pattern components use to read localized text: it returns `entry[currentLang] ?? entry['default']`. Components should go through this service rather than reading `LanguageService` directly for content.
- To add a new UI-facing string, add a `Localized` field to `Content` (with a `default` and any translations, e.g. `nl`) rather than hardcoding text in a template.

### Projects data

`ProjectsService` (`src/app/services/projects.service.ts`) fetches the GitHub repos for `Content.github_username` from the public GitHub API, filters out names listed in `Content.skip_project_titles`, and prepends the hand-curated entries in `Content.projects`. This is why some project cards (e.g. private/client work) have no repo link — they're manually maintained data, not derived from GitHub.

### Component conventions

- `components/base/*` — small reusable presentational pieces (button, tag, language-toggle, scroll-fade, project card and its loading skeleton).
- `components/contentblocks/*` — page-section components (header, about, skills, projects, footer), composed together by `pages/home-layout`.
- Each component has its own SCSS file (`styleUrl`); shared tokens/mixins live in `src/styles/` (`variables.scss`, `helpers.scss`, `base.scss`, `fonts.scss`).

### Deployment

`vercel.json` sets `outputDirectory` to `dist/gadijkhuis/browser`, so Vercel serves the static browser build. The SSR entry points (`src/server.ts`, `src/main.server.ts`) exist for running the app with Node (`serve:ssr:gadijkhuis` script) but are not what the Vercel deployment targets.
