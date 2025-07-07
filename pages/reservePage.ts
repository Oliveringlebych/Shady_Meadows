import { expect, Page } from "@playwright/test";

export default class ReservePage {

    constructor(public page: Page) {

    }
    
    clickOnDoubleRoom() {
       this.page.locator('div').filter({ hasText: /^£150 per nightBook now$/ }).getByRole('link').click();
    }

    async reserveNow() {
       await this.page.getByRole('button', { name: 'Reserve Now' }).click();
    }

    async enterFirstName(firstName: string) {
        await this.page.getByRole('textbox', { name: 'Firstname' }).fill(firstName)
    }

     async enterLastName(lastName: string) {
        await this.page.getByRole('textbox', { name: 'Lastname' }).fill(lastName)
    }

     async enterEmail(email: string) {
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email)
    }

     async enterTelephone(phone: string) {
        await this.page.getByRole('textbox', { name: 'Phone' }).fill(phone)
    }

    async checkSuccessMessage() {
        await expect(this.page.getByRole('heading', { name: 'Booking Confirmed' })).toBeVisible();
    }

    async checkErrorMessages() {
        await expect(this.page.getByText('must not be empty').first()).toBeVisible();
        await expect(this.page.getByText('Lastname should not be blank')).toBeVisible();
        await expect(this.page.getByText('size must be between 11 and 21')).toBeVisible();
        await expect(this.page.getByText('Firstname should not be blank')).toBeVisible();
        await expect(this.page.getByText('size must be between 3 and 30')).toBeVisible();
        await expect(this.page.getByText('must not be empty').nth(1)).toBeVisible();
        await expect(this.page.getByText('size must be between 3 and 18')).toBeVisible();
    }

}