### README.md

# Companies House – Shady Meadows Assessment

## Tech Stack
- **Playwright** with **TypeScript**
- **Node.js** (v22+ recommended)
- **Visual Studio Code for viewing and running tests** 

## Project Structure
```
SHADY_MEADOWS/
│
│   
├── pages/                  # Page Objects
│   ├── adminPage.ts
│   ├── homePage.ts
│   ├── reservePage.ts
│
├── test-results/                  # Results
│   ├── .last-run.json
│   ├── more will populate here on failures
│
├── tests/                  # Test files
│   ├── testsuite.spec.ts
│
├── utils/
│   ├── accessibility.ts
│   ├── constants.ts
│   ├── deviceCheck.ts 
│
├── .gitignore
├── BUG_REPORT.md
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── TEST_PLAN.md
```

## Installation
```bash
git clone https://github.com/Oliveringlebych/Shady_Meadows
cd Shady_Meadows
npm install  @playwright/test
npx playwright install
```

## Running Tests
```bash
npx playwright test
```
Test will run automatically in headless mode. To run in headed mode run this command.
```bash
npx playwright test --headed
```
Or change the following code in playwright.config.ts
```bash
 headless: true,
```
To
```bash
 headless: false,
```
**Failing test**

Test Retries:
Failing tests will be re-attempted to account for occasional website flakiness.

Test Report Structure:
The test-results folder will contain the results of any failing tests. An example structure is shown below in the event that two tests fail

├── test-results/                  # Results
│   ├── testSuite-Book-a-room-chromium
│   │   ├── error-context.md
│   │   ├── test-failed-1.png
│   │   ├── video.webm
│   ├── testSuite-Check-error-message-for-empty-fields-chromium
│   │   ├── error-context.md
│   │   ├── test-failed-1.png
│   │   ├── video.webm
│

error-context.md:

Provides context on the state of the web page at the time of failure and can be viewed in Visual Studio Code.

test-failed-1.png:

Captures and displays the browser at the moment of failure, with the output viewable in Visual Studio Code.

video.webm:

Displays the full sequence of the failed test. Open the file by dragging and dropping it into a web browser.

**Note on Flaky "Book a Room" Test:**

The "Book a Room" test occasionally fails, particularly during high-usage periods when many users are completing the tech assessment simultaneously. Several improvements have been made to reduce flakiness, but if the issue persists:

**Log into the admin site.**

1. Username: admin

2. Password: password

3. Clear all existing room bookings.

4. This often resolves the issue temporarily.


##  Test Coverage
| File | Purpose |
|------|-------------|
| `Book a room` | Creates a room and books it for a week between the 12th and 19th of the following month |
| `Send message` | Sends a valid message to the website |
| `Check error message for empty fields` | Checks the error message on the home page and the reserve page |
| `Check accessibility` | Ensures that the accessibility has not regressed |


## Page Object Model
| File | Purpose |
|------|---------|
| `adminPage.ts` | Creates room and checks for succesful messages and room bookings |
| `homePage.ts` | Manages all the interacteractions with the home page |
| `reservePage.ts` | Manages all the interacteractions with the reserve page |

## Utility Files
| File | Purpose |
|------|---------|
| `accessibility`| Checks for any regression on accessibility |
| `constants.ts` | Stores credentials and test inputs for reusability |
| `deviceCheck` | Checks if the user is using a mobile |


