import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  //Use the below to run a suite of tests from the a specific file
  testMatch: ["tests/testSuite.test.ts"], // Match all test files in the tests directory
  testDir: './tests', // Directory where your tests are located
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Opt out of parallel tests on CI. */
  

   workers: 4, // limits concurrency
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  
   retries: 2, // Retry failed tests up to 2 times
  use: {
    baseURL: "https://automationintesting.online/",
    headless: false,

    launchOptions: {
     slowMo: 100, // Slows down Playwright operations by 250ms to
     },


    //Put guides on how to change these in the git hub readme

    //takes a screenshot on failure
    screenshot: 'only-on-failure',


   // Record video for each test. See https://playwright.dev/docs/videos
    video: 'retain-on-failure',
   
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    
  },

});
