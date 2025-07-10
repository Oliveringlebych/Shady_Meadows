### BUG_REPORT.md

# Companies House – Shady Meadows Assessment

## Summary

This report lists confirmed and potential bugs identified through both automated and exploratory testing. Focus areas include core workflows, UI consistency, and user role behavior. The primary goal is to detect regressions and ensure reliable functionality across the platform.

## Bug Summary: Service Crash on Double Booking Attempt

**Description:** 

If a user attempts to book a room that is already reserved, the system crashes instead of displaying an error message or preventing the action.

**Impact:** 

Critical — causes service failure and disrupts booking functionality.

**Expected Behavior:** 

The user should receive a clear message indicating that the room is unavailable.

**Actual Behavior:** 

The service crashes when a booking conflict occurs.

## Bug Summary: Menu Dropdown Button Non-Functional on Mobile (Admin Site)

**Description:**

On the admin site, the menu dropdown button is unresponsive in mobile view.

**Impact:**

Medium — limits navigation for admin users on mobile devices.

**Expected Behavior:**

Tapping the menu button should open the navigation dropdown.

**Actual Behavior:**

Nothing happens when the menu button is tapped in mobile mode.

## Bug Summary: Accessibility Issues Across Screens and Devices

**Description:**

Multiple screens exhibit accessibility issues, with the number and types of issues varying between mobile and desktop views.

**Impact:**

Medium to High — impacts usability for assistive technologies and may result in compliance violations.

**Expected Behavior:**

Consistent accessibility support should be maintained across all devices and screen sizes.

**Actual Behavior:**

Accessibility features are inconsistent or missing, depending on the device used.

## Bug Summary: Flaky Room Availability – Unavailable Rooms Shown as Available

**Description:**

The 'Check Availability' feature intermittently displays already-booked rooms as available. This issue occurs inconsistently but has been observed during periods of high usage.

**Impact:**

High — may lead to user frustration, as it triggers another bug that fails to display a clear error message.

**Expected Behavior:**

When a user checks availability for specific dates, only rooms that are not already booked during that period should be displayed as available.

**Actual Behavior:**

Occasionally, rooms that are already booked are incorrectly shown as available. Attempting to book these rooms can cause the system to crash.

## Bug Summary: Unclear Validation Error Messages on Reserve Page

**Description:**

Some validation errors on the Reserve page are vague or missing key details. When users submit the form with incomplete, certain error messages do not specify which field or value is causing the issue.

**Impact:**

Medium — can confuse users and lead to incomplete submissions or frustration during booking.

**Expected Behavior:**
Each validation error should clearly identify the field it refers to and provide actionable guidance (e.g. “Email must not be empty”).

**Actual Behavior:**

Some error messages are generic (e.g. “must not be empty”) without stating which field is affected.


