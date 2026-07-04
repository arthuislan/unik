# Unik Website Version

Current version: v1.0.9

## v1.0.9 — Cancel Button Timing Logic

Status: Approved after audit

### Scope
- The **Cancel & Edit** button now appears only during the 20-second pre-send countdown.
- Once the countdown ends and the request is actually being sent, the cancel option disappears.
- This makes the form logic clearer and prevents the user from believing a request can be cancelled after it has already started sending.

### Preserved
- Main layout
- Header
- Contact section
- Floating buttons
- Favicon
- Premium form loading experience


Audit confirmation: v1.0.9 was verified as inheriting v1.0.8 desktop floating vertical layout and correcting the JavaScript cache reference to v1.0.9.
