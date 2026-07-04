# Changelog

## v1.0.9 — Cancel Button Timing Logic

### Changed
- Updated form logic so **Cancel & Edit** is visible only during the 20-second pre-send countdown.
- The cancel button is hidden once the request enters the actual sending step.

### Preserved
- Main layout.
- Header.
- Contact form structure.
- Floating contact buttons.
- Favicon and brand assets.
- Existing premium loading and success feedback.

### Audit
- JavaScript syntax verified.
- Required files verified.
- Version documentation updated.

## v1.0.8 — Desktop Floating Actions Layout
- Desktop floating actions changed to vertical.
- Mobile/tablet behavior preserved.

## v1.0.7 — Final Submission Experience
- Action buttons disappear after successful submission.

## v1.0.6 — Form Countdown and Navigation Fix
- Countdown corrected.
- Anchor navigation alignment improved.

## v1.0.5 — Premium Form Experience
- Added 20-second premium form experience.


Audit confirmation: v1.0.9 was verified as inheriting v1.0.8 desktop floating vertical layout and correcting the JavaScript cache reference to v1.0.9.


## v1.0.10 — Form Timing & Cancel Visibility Fix

### Changed
- Reduced the premium pre-send countdown from 20 seconds to 10 seconds.
- Added a CSS visibility guard so the `Cancel & Edit` button cannot appear before the countdown starts.
- Updated CSS and JS cache-busting references to `v=1.0.10`.

### Preserved
- v1.0.8 desktop vertical floating action buttons.
- v1.0.9 cancel timing logic.
- Main layout, header, hero, services, about, contact, favicons and thank-you page.

### Audit
- JavaScript syntax checked.
- Required files present.
- Floating action CSS verified.
- Form countdown references verified as 10 seconds.
