# Unik Naples Website Version

## Current Version

**v1.0.5 — Premium Form Experience**

## Release Type

Patch release.

## Scope

This release improves only the quote form submission experience.

## Files intentionally changed

- `assets/js/script.js`
- `assets/css/style.css`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

## Protected areas

- Header preserved.
- Hero preserved.
- Services section preserved.
- About section preserved.
- Quote panel layout preserved.
- Footer preserved.
- Floating contact buttons preserved.
- Favicon system preserved from v1.0.3.
- Existing `thank-you.html` preserved.

## Functional behavior

- After a valid form submission, the request waits 20 seconds before sending.
- During the 20-second preparation period, a processing message appears above the submit button.
- The submit button shows a premium white loading/progress effect.
- `Cancel & Edit` is available during the preparation period.
- If cancelled, all typed information remains in the form.
- After successful submission, a professional success message appears above the button.
- No return/home or request-another-quote buttons were added.
- No page redirect is used in this version.
