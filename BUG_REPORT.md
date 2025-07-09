### BUG_REPORT.md

# Companies House – Shady Meadows Assessment

## Summary

This report lists confirmed and potential bugs found through automated and exploratory testing. Focus areas include core workflows, UI consistency, and user role behavior. The goal is to catch regressions and ensure reliable functionality across the platform.

## Bug Summary: Service Crash on Double Booking Attempt

**Description:** 

If a user attempts to book a room that has already been booked, the system crashes instead of showing an error or preventing the action.

**Impact:** 

Critical — leads to service failure and disrupts booking functionality.

**Expected Behavior:** 

User should receive a clear message that the room is unavailable.

**Actual Behavior:** 

The service crashes when a booking conflict occurs.

## Bug Summary: Menu Dropdown Button Non-Functional on Mobile (Admin Site)

**Description:**

On the admin site, the menu dropdown button does not respond when accessed in phone (mobile) view.

**Impact:**

Medium — limits navigation for admin users on mobile devices.

**Expected Behavior:**

Tapping the menu button should open the navigation dropdown.

**Actual Behavior:**

Nothing happens when the menu button is tapped in phone mode.

## Bug Summary: Accessibility Issues Across Screens and Devices

**Description:**

Multiple screens show accessibility issues, with the number and type of issues varying between mobile and desktop views.

**Impact:**

Medium to High — affects usability for assistive technologies and may lead to compliance violations.

**Expected Behavior:**

Consistent accessibility support across all devices and screen sizes.

**Actual Behavior:**

Inconsistent or missing accessibility features depending on the device.

## Bug Summary: Flaky Room Availability – Unavailable Rooms Shown as Available

**Description:**

The "Check Availability" feature inconsistently shows rooms that are already booked as available. This behavior is intermittent but has been observed during periods of high usage.

**Impact:**

High — may result in user frustration as it leads to another bug which does not provide a clear error message.

**Expected Behavior:**

When a user checks availability for specific dates, only rooms that are not already booked during that time should appear as available.

**Actual Behavior:**

Occasionally, rooms that are already booked are shown as available. Attempts to book these rooms may crash the system.

