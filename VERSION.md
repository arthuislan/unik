# Unik Website Version

Current version: v1.1.1

## Release

**v1.1.1 — Professional Email Pipeline**

### Status
Ready for preview QA.

### Scope
- Hardened the Cloudflare Function email delivery flow.
- Added request IDs and structured logs for easier debugging in Cloudflare Functions logs.
- Changed email delivery from parallel `Promise.all` to a safer sequential pipeline.
- Made the internal UNIK notification the critical delivery step.
- Made the customer auto-response independent, so a customer confirmation failure does not discard the quote request.
- Preserved the v1.0.10 premium form experience and the v1.0.8 floating button behavior.

### Files changed
- `index.html`
- `functions/api/contact.js`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

### Files intentionally preserved
- `assets/js/script.js`
- `assets/css/style.css`
- Favicons and images
- Thank-you page
- Header, hero, services, about and contact layout
