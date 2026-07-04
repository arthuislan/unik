# Unik Naples Website

Official website for **Unik Cleaning Personal Care and Organization LLC.**

## Current Version

**v1.1.0 — Professional Email Infrastructure**

## What this version does

This release upgrades the contact form from a third-party public form endpoint to a secure Cloudflare Pages Function integrated with Resend.

When a visitor submits the quote form:

1. The existing premium 10-second form experience is preserved.
2. The form sends the data to `/api/contact`.
3. The Cloudflare Function validates the request.
4. Resend sends an internal notification to `contact@uniknaples.com`.
5. Resend sends a professional confirmation email to the customer.
6. The site displays the same approved success message.

## Required Cloudflare Secret

The project requires this Cloudflare Pages secret:

```text
RESEND_API_KEY
```

The Resend API key must never be committed to GitHub. It must be stored only inside Cloudflare as a Secret.

## Version Notes

### v1.1.0
- Added `functions/api/contact.js`.
- Replaced FormSubmit with secure `/api/contact` submission.
- Added internal email notification template.
- Added customer confirmation email template.
- Preserved the v1.0.10 form UX and layout.

### v1.0.10
- Reduced form countdown from 20 seconds to 10 seconds.
- `Cancel & Edit` appears only during the active countdown.

### v1.0.8
- Desktop floating contact buttons changed to a vertical dock.
- Mobile/tablet behavior preserved.

## Deployment Notes

After uploading this version to GitHub, Cloudflare must redeploy the project so the `RESEND_API_KEY` secret becomes available to the Pages Function.

## Audit Confirmation

v1.1.0 was built on top of the approved v1.0.10 package and preserves the approved visual layout.

## v1.1.1 — Professional Email Pipeline

This release improves the Resend + Cloudflare Pages Function email infrastructure.

### What changed
- Added request IDs and structured Cloudflare logs.
- Replaced parallel email delivery with a safer sequential pipeline.
- Internal UNIK notification is now the critical delivery step.
- Customer confirmation email is sent independently after the internal notification.
- If the customer auto-response fails, the quote request is still accepted as long as UNIK received the internal notification.

### Deployment note
Before approving production deployment, test this version in a Cloudflare Preview deployment and confirm that `RESEND_API_KEY` exists in the Preview environment.



## v1.1.2 — Diagnostic Email Pipeline

### Objective
Add diagnostic visibility to the Cloudflare Function + Resend email flow.

### Changed files
- `functions/api/contact.js`
- `assets/js/script.js`
- `index.html`
- `README.md`
- `CHANGELOG.md`
- `VERSION.md`

### Notes
- Layout preserved.
- CSS preserved.
- The form now surfaces diagnostic code/request ID during preview testing when the server rejects the submission.
- Cloudflare Function logs include Resend status, status text, and sanitized API key presence.
