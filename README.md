# Unik Naples Website

Official static website for **UNIK CLEANING PERSONAL CARE AND ORGANIZATION LLC.**

## Current version

**v1.0.4 — Inline Form Feedback Upgrade**

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

### v1.0.4

This release improves the form submission experience while preserving the approved home page structure and brand identity.

### What changed

- Added inline success confirmation above the submit button.
- Added a white loading spinner and animated button sheen during submission.
- Added a temporary cancel/edit option while the request is sending.
- Added multilingual success, error and cancelled messages.
- Updated project documentation.

### What did not change

- Header layout.
- Quote panel structure.
- Services.
- About section.
- Contact information.
- Floating buttons.
- Favicon system from v1.0.3.

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
