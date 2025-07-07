import { expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"

export default class AccessibilityTest {
   constructor(public page: Page) {
  
      }

  async basicAccessibilityTest() {
  await expect(this.page.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();

  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page: this.page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
    expect(axeBuilder.violations).toHaveLength(3);
}
};


    

