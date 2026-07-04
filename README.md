# Unik Naples Website

Official website for Unik Cleaning Personal Care and Organization LLC.

## Current Version

**v1.0.10 — Cancel Button Timing Logic**

## Version Notes

### v1.0.10
- Refined the premium form experience.
- The **Cancel & Edit** button appears only while the 20-second countdown is active.
- After the countdown finishes and the form begins sending, the cancel button is hidden.
- Layout and visual structure were preserved.

### v1.0.8
- Desktop floating contact buttons changed to a vertical dock.
- Mobile/tablet behavior preserved.

### v1.0.7
- Form action buttons disappear after successful submission.

### v1.0.6
- Fixed countdown behavior and anchor navigation alignment.

### v1.0.5
- Added premium form loading experience.

### v1.0.3
- Added thank-you page and updated favicon set.


Audit confirmation: v1.0.10 was verified as inheriting v1.0.8 desktop floating vertical layout and correcting the JavaScript cache reference to v1.0.10.


## v1.0.10 — Form Timing & Cancel Visibility Fix

- Changed form countdown from 20 seconds to 10 seconds.
- Kept `Cancel & Edit` hidden before the user starts submission.
- `Cancel & Edit` appears only during the active countdown window.
- Confirmed v1.0.8 desktop vertical floating buttons are preserved.
- Updated cache-busting query strings to `v=1.0.10`.
- No layout redesign was performed.
