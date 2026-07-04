# Unik Naples Website

Official static website for **UNIK CLEANING PERSONAL CARE AND ORGANIZATION LLC.**

## Current version

**v1.0.3 — Professional Thank-You Page and Favicon Update**

## Deploy target

Cloudflare Pages

## Build settings

- Build command: leave empty
- Build output directory: `/` or `.` depending on the Cloudflare interface

## Version rules

- `v1.0.x` = patch updates and small corrections.
- `v1.1.x` = small feature additions.
- `v2.0.0` = major visual or structural redesign.

## Current release notes

### v1.0.3

This release updates the form completion experience and favicon assets while preserving the approved home page design.

### What changed

- Created `thank-you.html`.
- Redirects valid form submissions to `/thank-you.html`.
- Added multilingual thank-you copy.
- Updated favicon assets using the approved rounded Unik icon.
- Added modern icon files for browser, Apple and Android support.
- Added `.gitignore`.
- Updated project documentation.

### What did not change

- Main page layout.
- CSS.
- Spacing.
- Quote panel design.
- Header.
- Services.
- About section.
- Contact information.
- Floating buttons.

## Workflow

1. Edit files locally.
2. Review changes in GitHub Desktop.
3. Commit with a clear message.
4. Push origin.
5. Cloudflare Pages deploys automatically.

## Important files

- `index.html` — main site page.
- `thank-you.html` — form success page.
- `assets/css/style.css` — main styles.
- `assets/js/script.js` — language switcher and form validation logic.
- `CHANGELOG.md` — version history.
- `VERSION.md` — current version details.
