import { Page, expect } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }

    async setCheckInDate() {
        //Added more next months clicks to avoid other users and make test less flakey
        await this.page.locator("(//input[@class='form-control'])[1]").click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.locator("//div[normalize-space(text())='12']").click();
    }

     async setCheckOutDate() {
        //Added more next months clicks to avoid other users and make test less flakey
        await this.page.locator("(//input[@class='form-control'])[2]").click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.locator("//div[normalize-space(text())='19']").click();
    }

    async clickCheckAvailability() {
        await this.page.locator("(//button[@type='button'])[2]").click();
    }

    async clickOnRoom() {
       await this.page.locator("(//a[@class='btn btn-primary'])[1]").click();
    }

    async enterName(name: string) {
        await this.page.getByTestId('ContactName').fill(name)
    }

     async enterEmail(email: string) {
        await this.page.getByTestId('ContactEmail').fill(email)
    }

     async enterTelephone(phone: string) {
        await this.page.getByTestId('ContactPhone').fill(phone)
    }

    async enterSubject(subject: string) {
        await this.page.getByTestId('ContactSubject').fill(subject)
    }

    async enterDescription(description: string) {
        await this.page.getByTestId('ContactDescription').fill(description)
    }

    submitMessage() {
        this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async checkSuccessMessage() {
        await expect(this.page.getByRole('heading', { name: 'Thanks for getting in touch' })).toBeVisible();
    }

    async checkErrorMessage() {
       await expect(this.page.getByText('Name may not be blank')).toBeVisible();
       await expect(this.page.getByText('Message must be between 20 and 2000 characters.')).toBeVisible();
       await expect(this.page.getByText('Message may not be blank')).toBeVisible();
       await expect(this.page.getByText('Phone must be between 11 and 21 characters.')).toBeVisible();
       await expect(this.page.getByText('Subject may not be blank')).toBeVisible();
       await expect(this.page.getByText('Phone may not be blank')).toBeVisible();
       await expect(this.page.getByText('Subject must be between 5 and 100 characters.')).toBeVisible();
       await expect(this.page.getByText('Email may not be blank')).toBeVisible();
    }

}