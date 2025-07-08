import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import ReservePage from '../pages/reservePage';
import { Constants } from '../constants'
import AccessibilityPage from '../pages/accessibilityPage';
import AdminPage from '../pages/adminPage';

test.beforeEach(async ({ page }) => {
  await page.goto(Constants.BASE_URL);
});

test('Book a room', async ({ page }) => {
  const homePage = new HomePage(page);
  const reservePage = new ReservePage(page);
  const adminPage = new AdminPage(page);

  // Log into the admin panel and creates a room
  await adminPage.clickAdminLink();
  await adminPage.login();
  await adminPage.createRoom();
  await adminPage.logOut();

  await homePage.setCheckInDate();
  await homePage.setCheckOutDate();
  await homePage.clickCheckAvailability();
  await homePage.clickOnRoom();
  await reservePage.reserveNow();
  await reservePage.enterFirstName(Constants.FIRST_NAME);
  await reservePage.enterLastName(Constants.LAST_NAME);
  await reservePage.enterEmail(Constants.EMAIL);
  await reservePage.enterTelephone(Constants.PHONE);
  await reservePage.reserveNow();
  await reservePage.checkSuccessMessage();
  
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
    const adminPage = new AdminPage(page);

    //Test relies on a room being available
    await adminPage.createRoomIfNeeded();

    await homePage.submitMessage();
    await homePage.checkErrorMessage();
    await homePage.clickOnRoom();
    await reservePage.reserveNow();
    await reservePage.reserveNow();
    await reservePage.checkErrorMessages();
  });

  test('Check accessibility', async ({ page }) => {
    const accessibilityPage = new AccessibilityPage(page);
    const homePage = new HomePage(page);
    const adminPage = new AdminPage(page);

    //Test relies on a room being available
    await adminPage.createRoomIfNeeded();

    await accessibilityPage.basicAccessibilityTest();
    await homePage.clickOnRoom();
    await accessibilityPage.basicAccessibilityTest();

  });
