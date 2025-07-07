import { test, expect } from "@playwright/test";
import { Constants } from '../constants'
import AxeBuilder from "@axe-core/playwright"
import fs from "fs";

test.only("Basic Accessibility Test", async ({ page }) => {
  await page.goto(Constants.BASE_URL);
  await page.locator("a.btn.btn-primary.btn-lg").waitFor

  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
    expect(axeBuilder.violations).toHaveLength(3);
  
});
    

test.only("Basic Accessibility Test with more", async ({ page }) => {
  await page.goto("https://automationintesting.online/reservation/12?checkin=2025-07-07&checkout=2025-07-08");
  
  //Checks whole page
  const axeBuilder = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa']).analyze();
    expect(axeBuilder.violations).toHaveLength(2);
  
});
    

test('generate a11y baseline', async ({ page }) => {
  await page.goto(Constants.BASE_URL);
  const results = await new AxeBuilder({ page }).analyze();
  fs.writeFileSync('a11y-baseline.json', JSON.stringify(results.violations, null, 2));
});

test('a11y should not regress', async ({ page }) => {
  await page.goto("https://automationintesting.online/reservation/2?checkin=2025-07-06&checkout=2025-07-07");
  const current = await new AxeBuilder({ page }).analyze();

  const baseline = JSON.parse(fs.readFileSync('a11y-baseline.json', 'utf8'));

  // Create sets of violation IDs for comparison
  const currentIds = new Set(current.violations.map(v => v.id));
  const baselineIds = new Set(baseline.map(v => v.id));

  // Check for regressions (new violations not in baseline)
  const newViolations = [...currentIds].filter(id => !baselineIds.has(id));

  expect(newViolations).toEqual([]); // Fails if any new violations
});

function withTags(arg0: string[]) {
  throw new Error("Function not implemented.");
}

