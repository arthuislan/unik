# Unik Naples Website

Official website for **Unik Cleaning Personal Care and Organization LLC.**

## Current Version

**v1.3.0 — Professional Email Experience**

## Stable Baseline

This release is built on top of the approved **v1.2.4** production baseline.

The website layout and form experience remain preserved. This version focuses exclusively on the transactional email experience and deliverability posture.

## What changed in v1.3.0

### Professional Email Experience

- Rebuilt the customer confirmation email with a refined Unik Naples visual identity.
- Rebuilt the internal notification email received by Unik Naples.
- Removed emoji-style elements from email communication.
- Improved email hierarchy, spacing, typography and light/dark rendering.
- Preserved the approved Unik Naples brand direction: clean, minimal, premium and discreet.
- Preserved the reference ID system.
- Improved plain-text email versions for better compatibility with strict mail clients.
- Improved internal email subject format for easier filtering and search.
- Preserved `From: Unik Naples <contact@uniknaples.com>` and correct `Reply-To` behavior.
- Added clearer Cloudflare Function logs for email delivery tracing.

## What changed in v1.2.4

- Added Airbnb to the Service Needed selector.
- Added Personal Organizer to the Service Needed selector.
- Preserved Cloudflare Pages Functions and Resend email pipeline.
- Preserved approved email UI and Dark/Light refinements from v1.2.3.

## Required Cloudflare Secret

The project requires this Cloudflare Pages secret in both **Production** and **Preview** when testing branches:

```text
RESEND_API_KEY
```

The Resend API key must never be committed to GitHub. It must be stored only inside Cloudflare as a Secret.

## Files intentionally changed in v1.3.0

- `functions/api/contact.js`
- `index.html`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

## Files intentionally preserved

- `assets/css/style.css`
- `assets/js/script.js`
- visual layout
- favicon assets
- floating buttons behavior
- contact form UX
- Cloudflare Function route `/api/contact`
- Resend integration model
- service selector options from v1.2.4

## Deployment notes

Deploy first to a preview branch when possible. For direct production deployment, verify immediately after deploy:

- quote form submits successfully;
- internal Unik Naples email is received at `contact@uniknaples.com`;
- client confirmation email is received;
- reference ID appears in both emails;
- no layout regression is visible on the website;
- Cloudflare Function logs show successful delivery.
