# Unik Naples Website

Official website for Unik Naples Cleaning Personal Care and Organization LLC.

## Current Version

v1.3.1 — Email Dark Mode and Deliverability Hotfix

## What this version does

This release corrects the v1.3.0 email layout regression while keeping the production Cloudflare Pages + Resend infrastructure intact.

## Included

- Restores the approved v1.2.4 dark-mode-safe customer email layout.
- Preserves the contact form and `/api/contact` Cloudflare Pages Function.
- Preserves Resend transactional email delivery.
- Keeps `contact@uniknaples.com` as the professional sender and recipient.
- Preserves plain-text alternatives for Apple Mail, iCloud, Gmail, Outlook, and other clients.
- Adds request tracking headers for cleaner diagnostics and provider reputation signals.
- Updates cache references to v1.3.1.

## Required Cloudflare Secret

The production deployment requires:

```
RESEND_API_KEY
```

This key must remain stored only in Cloudflare Pages Secrets. It must never be committed to GitHub.

## Deployment note

After adding or changing secrets, redeploy the Cloudflare Pages project so the production deployment can access the latest environment.

## Audit Confirmation

- `functions/api/contact.js` checked for JavaScript syntax errors.
- `assets/js/script.js` checked for JavaScript syntax errors.
- Site CSS/layout preserved.
- Resend delivery flow preserved.
- Email dark-mode compatibility restored from v1.2.4.
