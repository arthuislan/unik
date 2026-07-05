# Unik Naples Website

Official website for **Unik Cleaning Personal Care and Organization LLC.**

## Current Version

**v1.2.0 — Professional Contact Experience**

## Stable Baseline

This release is built on top of the approved **v1.1.2 Stable** production version.

The professional email infrastructure remains active:

1. Visitor submits the quote form.
2. The site sends the request to `/api/contact`.
3. Cloudflare Pages Function validates the request.
4. Resend sends the internal notification to `contact@uniknaples.com`.
5. Resend sends the client confirmation email.
6. The site displays the approved success message.

## What changed in v1.2.0

### Professional Contact Experience
- Improved the customer confirmation email with a more premium branded layout.
- Improved the internal UNIK notification email with a clearer structure and a **Reply to customer** button.
- Added a readable public reference ID format: `UNIK-YYYYMMDD-XXXXXXXX`.
- Added the reference ID to the success message shown on the website.
- Added the reference ID to both internal and client emails.
- Preserved the v1.0.10 / v1.1.2 form flow and email infrastructure.

## Required Cloudflare Secret

The project requires this Cloudflare Pages secret in both **Production** and **Preview** when testing branches:

```text
RESEND_API_KEY
```

The Resend API key must never be committed to GitHub. It must be stored only inside Cloudflare as a Secret.

## Files intentionally changed

- `functions/api/contact.js`
- `assets/js/script.js`
- `index.html`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

## Files intentionally preserved

- `assets/css/style.css`
- visual layout
- favicon assets
- floating buttons behavior
- Cloudflare Function route structure
- Resend integration model

## Deployment notes

Deploy first to a preview branch such as `test-v1.2.0`.

Before merging to `main`, verify:

- quote form submits successfully;
- internal UNIK email is received;
- client confirmation email is received;
- success message displays the reference ID;
- no layout regression is visible.
