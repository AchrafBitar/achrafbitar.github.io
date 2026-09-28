# achrafbitar.github.io

Personal portfolio. Astro + React islands + Tailwind CSS v4.

> **Why this README exists:** the repo previously contained only the *build output* —
> no `src/`, no `package.json`. The Astro source had been lost, so the only way to
> change a word on the site was to hand-edit minified JavaScript. The source now
> lives here. Keep it here.

## Editing content

All text on the site lives in one file:

    src/data/content.ts

Profile, CV links, skills, experience, education, projects, values. Change it there —
no component needs touching for a content update.

## Local development

    npm install
    npm run dev        # http://localhost:4321

## Publishing

GitHub Pages serves a `<user>.github.io` repo from the **root of `main`**, so the build
output has to sit at the top level next to the source:

    npm run build      # -> dist/
    npm run deploy     # copies dist/ to the repo root, clearing old _astro assets
    git add -A && git commit -m "Update site" && git push

`npm run deploy` removes the previous `_astro/` directory first, so the hashed asset
files don't accumulate on every deploy.

## Layout

    src/data/content.ts      all site copy
    src/pages/index.astro    page composition
    src/components/          Header.tsx is the only React island (theme + mobile nav);
                             everything else is static Astro and ships no JS
    src/layouts/Layout.astro <head>, fonts, theme-before-paint script
    public/                  photo, favicons, CV PDFs, .nojekyll
    scripts/deploy.mjs       dist -> root copy

## Design

Warm paper/ink palette with a single rust accent, set in Newsreader (display),
Geist (text) and JetBrains Mono (metadata). Sections are numbered and laid out on
a two-column editorial grid — a sticky label rail on the left, content on the
right — rather than as a stack of uniform cards. A faint SVG grain sits over the
page via `body::after`.

Tokens live in the `@theme` block of `src/styles/global.css`; change them there
and both themes follow.

### Logos

Brand marks come from [`simple-icons`](https://github.com/simple-icons/simple-icons),
which is CC0. AWS, OpenAI, Oracle and the Java wordmark are **not** in that set —
they were withdrawn at the trademark holders' request — so they render as
typographic marks instead. Don't replace them with logos pulled off the web:
that set was curated for redistribution and ad-hoc copies are not.

Employers are shown as two-letter monograms (`employerMarks` in
`src/data/content.ts`) for the same reason.

## CV files

`public/CV_Achraf_Bitar_EN.pdf` and `public/CV_Achraf_Bitar_FR.pdf` are the current CVs.
`public/AchrafBitarCV.pdf` is kept as a copy of the English one so older links still work.

**Keep these in step with `src/data/content.ts`.** The site and the CV are read side by
side by the same people; the experience bullets and the project descriptions are meant to
match.
