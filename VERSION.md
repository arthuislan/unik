# Unik Naples Version

Current version: **v1.2.3**

## Release

**v1.2.3 — Email CTA Removal & Dark Mode Text Refinement**

## Status

Ready for Preview validation.

## Scope

This patch refines only the customer confirmation email presentation based on approved visual feedback.

- Removed the **Visit our website** button from the customer confirmation email in both light and dark modes.
- Preserved the light-mode design, except for the approved button removal.
- In dark mode, changed the header subtitle text to white at 60% opacity.
- In dark mode, changed the reference label text to white at 60% opacity.
- In dark mode, changed the footer company name to white at 60% opacity.

## Preserved

- Website layout.
- CSS layout.
- Contact form UX.
- Cloudflare Function route `/api/contact`.
- Resend integration.
- Reference ID generation.
- Sender name as `Unik Naples`.
