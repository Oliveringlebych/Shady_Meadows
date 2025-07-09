import { expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { Constants } from './constants';
import { isMobileChrome } from '../utils/deviceCheck';

export default class AccessibilityTest {
   constructor(public page: Page) {

   }

      

  async basicAccessibilityTest() {
  // Check if the main link is visible before running accessibility checks
  await expect(this.page.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();

  const isMobile = await isMobileChrome(this.page);
  

  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page: this.page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
  //Checking if using a mobile and on the home page
  if (isMobile && this.page.url() === Constants.BASE_URL) {
    expect(axeBuilder.violations).toHaveLength(4);
  //Checking if using a mobile and on the reserve page
  } else if (isMobile) {
    expect(axeBuilder.violations).toHaveLength(3);
  //Checking if using a desktop and on the home page
  } else if (this.page.url() === Constants.BASE_URL) {
    expect(axeBuilder.violations).toHaveLength(3);
  //Checking if using a desktop and on the reserve page
  } else {
    expect(axeBuilder.violations).toHaveLength(2);
  }
}
};


    

