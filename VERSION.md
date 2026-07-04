# Unik Website Version

Current version: v1.1.0

## Release

**v1.1.0 — Professional Email Infrastructure**

### Status
Approved after technical audit.

### Scope
- Replaced the public FormSubmit integration with a private Cloudflare Pages Function at `/api/contact`.
- Added Resend email delivery using the secure Cloudflare secret `RESEND_API_KEY`.
- Added an internal notification email to `contact@uniknaples.com`.
- Added an automatic confirmation email for the customer.
- Preserved the v1.0.10 premium form experience, including the 10-second countdown and Cancel & Edit logic.

### Files changed
- `index.html`
- `assets/js/script.js`
- `functions/api/contact.js`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

### Files intentionally preserved
- `assets/css/style.css`
- Favicons and images
- Thank-you page
- Header, hero, services, about and contact layout
- Floating action behavior from v1.0.8
