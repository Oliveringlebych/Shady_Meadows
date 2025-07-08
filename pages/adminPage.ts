import { expect, Page } from "@playwright/test";
import { Constants } from '../constants';

export default class AdminPage {
   constructor(public page: Page) {

   }

   async clickAdminLink() {
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

   async logOut() {
      await this.page.locator("button.btn.btn-outline-danger").click();
   }

   async checkForNameGenerated() {
      await this.page.getByRole('link', { name: 'Messages' }).click();
      await expect(this.page.getByText(Constants.randomName)).toBeVisible();
   }

   
   async createRoomIfNeeded() {
    if ((await this.page.locator("(//a[@class='btn btn-primary'])[1]").count()) === 0) {
      await this.clickAdminLink();
      await this.login();
      await this.createRoom();
      await this.logOut();
    } 
   }

   async checkIfMessageHasBeenReceived() {
      await this.clickAdminLink();
      await this.login();
      await this.checkForNameGenerated();
   }


};


    

