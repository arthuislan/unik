# Unik Naples Website

## Current Version

**v1.3.3 — Service Selector Translation Hotfix**

## Summary

This release is built on top of the approved v1.2.4 production baseline.

The professional email infrastructure remains active:

1. Visitor submits the quote form.
2. The site sends the request to `/api/contact`.
3. Cloudflare Pages Function validates the request.
4. Resend sends the internal notification to `contact@uniknaples.com`.
5. Resend sends the client confirmation email.
6. The site displays the approved success message.

## What changed in v1.3.3

### Service Selector Translation Hotfix

This patch corrects the multilingual labels for the new service selector options across English, Spanish and Brazilian Portuguese.

### Changes

- Added proper multilingual labels for **Airbnb Cleaner**.
- Added proper multilingual labels for **Home Organization & Personal Organizer**.
- Service names now switch correctly between English, Spanish and Portuguese.
- Updated cache references to `v=1.3.3`.

## Preserved

- Website layout.
- CSS.
- Cloudflare Pages Functions.
- Resend integration.
- Email templates.
- Contact form workflow.
- Dark/Light email compatibility.

## Audit

- `assets/js/script.js` verified.
- `functions/api/contact.js` verified.
- No JavaScript syntax errors.
- CSS unchanged.
- Backend email pipeline unchanged.

## Deployment

Deploy to a Preview branch first.

After approval, merge into `main`.

Cloudflare Pages will automatically deploy the production version.

## Previous Stable Releases

### v1.2.4 — Service Selector Update

- Added Airbnb service.
- Added Personal Organizer service.
- Preserved Cloudflare Pages Functions.
- Preserved Resend integration.
- Preserved approved layout.

### v1.2.1 — Email Brand Header Refinement

- Customer sender changed to **Unik Naples**.
- Customer subject updated.
- Dark/Light email improvements.
- Layout preserved.

### v1.2.0

Initial professional email experience.