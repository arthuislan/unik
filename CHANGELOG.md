# Changelog

## v1.2.0 — Professional Contact Experience

### Status
Prepared for Preview QA.

### Objective
Improve the professional experience around contact requests while preserving the stable Resend + Cloudflare email infrastructure.

### Changed
- Refined the client confirmation email with a premium UNIK-branded layout.
- Refined the internal quote request email with clearer hierarchy and a direct reply button.
- Added a readable public request ID format: `UNIK-YYYYMMDD-XXXXXXXX`.
- Added the request/reference ID to the website success message.
- Added the request/reference ID to both e-mail templates.
- Updated cache query strings to `v=1.2.0`.

### Preserved
- Approved visual layout.
- CSS.
- Form countdown and cancel/edit logic.
- Floating button behavior.
- Cloudflare Pages Function route `/api/contact`.
- Resend API integration and secret model.

### QA Checklist
- [ ] Deploy to Preview branch.
- [ ] Submit test form in English.
- [ ] Submit test form in Portuguese.
- [ ] Confirm internal email received.
- [ ] Confirm client email received.
- [ ] Confirm success message shows reference ID.
- [ ] Confirm no layout regression.

---

## v1.1.2 — Diagnostic Email Pipeline

### Added
- Diagnostic response payloads for `/api/contact`.
- Clear error codes and request IDs for email delivery failures.
- Sanitized logs for Cloudflare Function troubleshooting.
- Front-end diagnostic display during failed preview submissions.

### Preserved
- Approved layout.
- CSS.
- Form UX timing and cancel logic.
- Floating buttons behavior.


## v1.1.1 — Professional Email Pipeline

### Fixed
- Reworked the email pipeline to avoid failing the full request when only the customer auto-response fails.
- Added safer error handling around the Resend API integration.
- Added request IDs to help match website submissions with Cloudflare Function logs.
- Added structured logs for missing secrets, validation issues and Resend delivery failures.

### Changed
- Internal email delivery to UNIK now happens first and is the critical delivery step.
- Customer auto-response is sent after the internal notification and is treated as secondary.
- Updated cache-busting references to `v=1.1.1`.

### Preserved
- v1.0.10 premium 10-second form experience.
- v1.0.10 Cancel & Edit visibility logic.
- v1.0.8 desktop vertical floating contact buttons.
- Main layout, CSS, header, hero, services, about, contact, favicons and thank-you page.

### QA required
- Test in Cloudflare Preview before merging to `main`.
- Confirm `RESEND_API_KEY` exists for the Preview environment.
- Confirm one internal email arrives at `contact@uniknaples.com`.
- Confirm the customer receives the branded confirmation email.


## v1.1.0 — Professional Email Infrastructure

### Added
- Added Cloudflare Pages Function: `functions/api/contact.js`.
- Added secure Resend API integration using the Cloudflare Secret `RESEND_API_KEY`.
- Added internal email notification to `contact@uniknaples.com`.
- Added customer auto-response email with Unik branding.
- Added server-side validation for name, phone, email and message.
- Added honeypot spam protection handling on the server side.

### Changed
- Updated form submission endpoint from FormSubmit to `/api/contact`.
- Updated JavaScript submission logic to send JSON to the Cloudflare Function.
- Updated cache-busting references to `v=1.1.0`.

### Preserved
- v1.0.10 premium 10-second form experience.
- v1.0.10 Cancel & Edit visibility logic.
- v1.0.8 desktop vertical floating contact buttons.
- Main layout, header, hero, services, about, contact, favicons and thank-you page.
- `assets/css/style.css` was not modified.

### Audit
- JavaScript syntax checked.
- Function syntax checked.
- Required files present.
- Form endpoint verified as `/api/contact`.
- Documentation updated.

## v1.0.10 — Form Timing & Cancel Visibility Fix

### Changed
- Reduced the premium pre-send countdown from 20 seconds to 10 seconds.
- Kept `Cancel & Edit` hidden before the user starts submission.
- `Cancel & Edit` appears only during the active countdown window.

## v1.0.8 — Desktop Floating Actions Layout
- Desktop floating actions changed to vertical.
- Mobile/tablet behavior preserved.
