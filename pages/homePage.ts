import { Page, expect } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }

    //Maybe see if you can get this working

    async setCheckInDate() {
        await this.page.locator("(//input[@class='form-control'])[1]").click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.locator("//div[normalize-space(text())='12']").click();
    }

     async setCheckOutDate() {
        await this.page.locator("(//input[@class='form-control'])[2]").click();
        await this.page.getByRole('button', { name: 'Next Month' }).click();
        await this.page.locator("//div[normalize-space(text())='19']").click();
    }

    clickCheckAvailability() {
        this.page.getByRole('button', { name: 'Check Availability' }).click();
    }

    clickOnDoubleRoom() {
       this.page.locator('div').filter({ hasText: /^£150 per nightBook now$/ }).getByRole('link').click();
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