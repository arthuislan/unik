# Unik Naples Website

## Current Version

v1.3.3 — Service Selector Refinement

## Summary

This patch updates the contact form service selector while preserving the approved v1.3.1 email dark-mode and deliverability hotfix.

## Changes

- Added/standardized **Airbnb Cleaner** as a service option.
- Updated **Personal Organizer** to **Home Organization & Personal Organizer**.
- Updated cache references to `v=1.3.2`.
- Preserved the website layout, Cloudflare Pages Function, Resend integration and email templates.

## Preserved

- Approved site layout.
- Approved email dark-mode compatibility.
- Resend API integration.
- Cloudflare Pages deployment structure.
- Contact form flow.

## Audit

- `assets/js/script.js` checked for JavaScript syntax errors.
- `functions/api/contact.js` checked for JavaScript syntax errors.
- CSS was not modified.
- Backend email pipeline was not modified.

## Deployment

Deploy through Cloudflare Pages from the approved branch after testing.


## v1.3.3 Service Selector Translation Hotfix

This patch corrects the multilingual labels for the new service selector options across English, Spanish and Brazilian Portuguese. No layout, CSS, backend, Resend, or Cloudflare changes were made.
