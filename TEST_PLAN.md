### TEST_PLAN.md

## Scope

# This test plan covers core user interactions on the Shady Meadows BnB platform, specifically:

**Booking a room:**

Verify that room bookings are a success and visible in the admin dashboard.

**Sending a message:**

Confirm that messages are a succes and visible in the admin dashboard.

**Form validation:**

Ensure appropriate validation errors are displayed when required fields are left empty.

**Accessibility compliance:**

Check that accessibility on either the home page or reserve page does not regress. The admin site is not a concern for accessibilty

# Test Environments

https://automationintesting.online/

# Browsers:

1. Chrome (Desktop)

2. Firefox (Desktop)

3. WebKit (Desktop)

4. Chrome (Pixel 5)

# Pages to be tested:

1. Home Page

2. Reserve Page

3. Admin Site

# Test Execution

**Manual Tests:**

For UI interactions and validation.

**Automated Tests:**

For regression and cross-browser consistency in high traffic and priority areas.

**Accessibility Audits:**

Performed using browser tools, screen readers and automation with axe accessibility

**Non-functional testing**

Accessibility Testing:

This was done using Axe plugin in line with GDS requirements

Cross browser testing:

This will run in Chrome Pixel 5, WebKit Desktop, Firefox Desktop and Chrome Desktop

# Reporting & Follow-up

Document any bugs found with severity, steps to reproduce, and screenshots.

Re-test after fixes to confirm resolution.

Accessibility regressions will be flagged and prioritized.

