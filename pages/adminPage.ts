import { expect, Page } from "@playwright/test";
import { Constants } from '../utils/constants';
import { isMobileChrome } from '../utils/deviceCheck';

export default class AdminPage {
   constructor(public page: Page) {
   
   }


   async clickAdminLink() {
   //Deals with mobile view
   const isMobile = await isMobileChrome(this.page);

   if (isMobile) {
    await this.page.locator('button.navbar-toggler').click();
   }

   await this.page.getByRole('link', { name: 'Admin', exact: true }).click();
   }

   async login() {
      await this.page.getByRole('textbox', { name: 'Username' }).fill(Constants.USERNAME);
      await this.page.getByRole('textbox', { name: 'Password' }).fill(Constants.PASSWORD);
      await this.page.locator("button[type='submit']").click();
   }

   async createRoom() {
      await this.page.getByTestId('roomName').fill('105');
      await this.page.locator('#accessible').selectOption('true');
      await this.page.locator('#roomPrice').fill('110');
      await this.page.getByRole('button', { name: 'Create' }).click();
   }

   async returnToTheHomePage() {
      await this.page.getByRole('link', { name: 'Restful Booker Platform Demo' }).click();
   }

   async checkForNameGenerated() {
   //The dropdown bar does not work on mobile for the admin page, so messages cannot be viewed

   const isMobile = await isMobileChrome(this.page);
   if (!isMobile) {
    await this.page.getByRole('link', { name: 'Messages' }).click();
    await expect(this.page.getByText(Constants.randomName)).toBeVisible();
  } else {
    console.log('Skipping message click – running on mobile Chrome');
  }

   }

   
   async createRoomIfNeeded() {
    if ((await this.page.locator("(//a[@class='btn btn-primary'])[1]").count()) === 0) {
      await this.clickAdminLink();
      await this.login();
      await this.createRoom();
      await this.returnToTheHomePage();
    } 
   }

   async checkIfMessageHasBeenReceived() {
      await this.clickAdminLink();
      await this.login();
      await this.checkForNameGenerated();
   }

   async checkIfBookingHasBeenReceived() {
      await this.clickAdminLink();
      await this.checkForNameGenerated();
   }


};


    

