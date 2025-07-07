import { expect, Page } from "@playwright/test";
import { Constants } from '../constants'
import AxeBuilder from "@axe-core/playwright"

export default class AccessibilityTest {
   constructor(public page: Page) {
  
      }

  async basicAccessibilityTest() {
  await this.page.goto(Constants.BASE_URL);
  
  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page: this.page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
  if (this.page.url() === Constants.BASE_URL) {
    expect(axeBuilder.violations).toHaveLength(3);
  } else {
    expect(axeBuilder.violations).toHaveLength(0);
  }
}
};


    

