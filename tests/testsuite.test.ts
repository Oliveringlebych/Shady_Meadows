import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import ReservePage from '../pages/reservePage';
import { Constants } from '../constants'
import AccessibilityTest from '../pages/accessibility';

test.beforeEach(async ({ page }) => {
  await page.goto(Constants.BASE_URL);
});

test('Book a double room', async ({ page }) => {
  const homePage = new HomePage(page);
  const reservePage = new ReservePage(page);

  await homePage.setCheckInDate();
  await homePage.setCheckOutDate();
  await homePage.clickCheckAvailability();
  await homePage.clickOnDoubleRoom();
  await reservePage.reserveNow();
  await reservePage.enterFirstName(Constants.FIRST_NAME);
  await reservePage.enterLastName(Constants.LAST_NAME);
  await reservePage.enterEmail(Constants.EMAIL);
  await reservePage.enterTelephone(Constants.PHONE);
  await reservePage.reserveNow();
  //confirmation screen is flaky, so no check here at the moment

  });

  test('Send message', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.enterName(Constants.FIRST_NAME);
    await homePage.enterEmail(Constants.EMAIL);
    await homePage.enterTelephone(Constants.PHONE);
    await homePage.enterSubject(Constants.SUBJECT);
    await homePage.enterDescription(Constants.DESCRIPTION);
    await homePage.submitMessage();
    await homePage.checkSuccessMessage();
    
  });

  test('Check error message for empty fields', async ({ page }) => {
    const homePage = new HomePage(page);
    const reservePage = new ReservePage(page);

    await homePage.submitMessage();
    await homePage.checkErrorMessage();
    await homePage.clickOnDoubleRoom();
    await reservePage.reserveNow();
    await reservePage.reserveNow();
    await reservePage.checkErrorMessages();
  });

  test('Check accessibility', async ({ page }) => {
    const accessibilityTest = new AccessibilityTest(page);
    const homePage = new HomePage(page);

    await accessibilityTest.basicAccessibilityTest();
    await page.waitForTimeout(3000);

    await homePage.clickOnDoubleRoom();
    await accessibilityTest.basicAccessibilityTest();
    await page.waitForTimeout(3000);

  });
