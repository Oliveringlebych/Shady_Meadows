import { expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { Constants } from '../constants';

export default class AccessibilityTest {
   constructor(public page: Page) {

   }

      

  async basicAccessibilityTest() {
  await expect(this.page.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();

  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page: this.page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
  if (this.page.url() === Constants.BASE_URL) {
    expect(axeBuilder.violations).toHaveLength(3);
  } else {
    expect(axeBuilder.violations).toHaveLength(2);
  }
}
};


    

