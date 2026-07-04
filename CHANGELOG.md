# Changelog

## v1.0.6 — Form Countdown and Navigation Alignment Fix

### Changed

- Made the 20-second form preparation period visible with a live countdown.
- Ensured the request is only sent after the 20-second preparation period finishes.
- Preserved the `Cancel & Edit` behavior before the request is sent.
- Added cache-busting query strings to `style.css` and `script.js` so the live site loads the new version instead of a cached file.
- Fixed navigation anchor alignment for Services, About and Contact with sticky-header offset handling.

### Files changed

- `index.html`
- `assets/js/script.js`
- `assets/css/style.css`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

### Not changed

- No main layout redesign.
- No quote panel redesign.
- No header visual redesign.
- No floating contact button change.
- No favicon change.
- No image asset change.

## v1.0.5 — Premium Form Experience

- Added premium inline form feedback and `Cancel & Edit` behavior.

## v1.0.4 — Inline Form Feedback Upgrade

- Added inline success/error/cancel feedback.

## v1.0.3 — Thank-You Page and Favicon Final

- Added thank-you page and finalized favicon system.
