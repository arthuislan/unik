# Changelog

## v1.3.1 — Email Dark Mode and Deliverability Hotfix

### Objective

Correct the v1.3.0 email layout regression and preserve the approved v1.2.4 dark-mode-safe email experience while maintaining the current Cloudflare Pages and Resend infrastructure.

### Changed

- Restored the approved customer email layout from v1.2.4.
- Preserved dark-mode overrides for Apple Mail and iCloud Mail.
- Preserved professional sender format: `Unik Naples <contact@uniknaples.com>`.
- Preserved `Reply-To` behavior.
- Preserved HTML + plain-text email alternatives.
- Added request tracking headers to Resend payloads.
- Updated cache references to v1.3.1.

### Preserved

- Website layout.
- CSS visual structure.
- Contact form behavior.
- `/api/contact` endpoint.
- Resend integration.
- `RESEND_API_KEY` secret usage.
- Service selector options from v1.2.4.

### Audit

- `functions/api/contact.js` passed JavaScript syntax check.
- `assets/js/script.js` passed JavaScript syntax check.
- Site CSS was not altered.
- No API keys or secrets were added to the repository.

### Status

Testing branch package.
