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

  //Finds a valid date
  await homePage.setCheckInDate();
  await homePage.setCheckOutDate();
  await homePage.clickCheckAvailability();
  await homePage.clickOnRoom();

  // Fills in the reservation form
  await reservePage.reserveNow();
  await reservePage.enterFirstName(Constants.randomName);
  await reservePage.enterLastName(Constants.LAST_NAME);
  await reservePage.enterEmail(Constants.EMAIL);
  await reservePage.enterTelephone(Constants.PHONE);
  await reservePage.reserveNow();
  await reservePage.checkSuccessMessage();

  // Check if the booking has been received in the admin panel
  await adminPage.checkIfMessageHasBeenReceived();

  });

  test('Send message', async ({ page }) => {
    const homePage = new HomePage(page);
    const adminPage = new AdminPage(page);

    // Fill in the contact form and sends it
    await homePage.enterName(Constants.randomName);
    await homePage.enterEmail(Constants.EMAIL);
    await homePage.enterTelephone(Constants.PHONE);
    await homePage.enterSubject(Constants.SUBJECT);
    await homePage.enterDescription(Constants.DESCRIPTION);
    await homePage.submitMessage();
    await homePage.checkSuccessMessage();

    // Check if the message has been received in the admin panel
    await adminPage.checkIfMessageHasBeenReceived();

  });

  test('Check error message for empty fields', async ({ page }) => {
    const homePage = new HomePage(page);
    const reservePage = new ReservePage(page);
    const adminPage = new AdminPage(page);

    //Test relies on a room being available and so will generate one if needed 
    await adminPage.createRoomIfNeeded();

    // Attempt to submit the message without entering any details on the home page
    await homePage.submitMessage();
    await homePage.checkErrorMessage();

    //Opens the reserve page
    await homePage.clickOnRoom();

    // Attempt to reserve the room without entering any details
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

    //Runs the accessibility test on the home page
    await accessibilityPage.basicAccessibilityTest();

    await homePage.clickOnRoom();
    // Runs the accessibility test on the reserve page
    await accessibilityPage.basicAccessibilityTest();

  });
