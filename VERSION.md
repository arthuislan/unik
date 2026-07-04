# Unik Naples Website Version

## Current Version

**v1.0.4 — Inline Form Feedback Upgrade**

## Release Type

Patch release.

## Scope

This release improves only the quote form submission experience on the existing approved layout.

## Files intentionally changed

- `index.html`
- `assets/js/script.js`
- `assets/css/style.css`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

## Protected areas

- Header preserved.
- Quote panel visual structure preserved.
- Services section preserved.
- About section preserved.
- Footer preserved.
- Floating contact buttons preserved.
- Favicon system preserved from v1.0.3.

## Functional behavior

- The form no longer redirects after a successful AJAX submission.
- The submit button shows a white loading spinner and moving sheen effect.
- A temporary cancel/edit button appears while the request is being sent.
- A professional success message appears above the submit button after the request is delivered.
- Error and cancelled states display inside the same feedback area.
