### README.md

# Companies House – Shady Meadows Assessment

## Tech Stack
- **Playwright** with **TypeScript**
- **Node.js** (v22+ recommended)

## Project Structure
```
shady-meadows/
│
├── tests/                  # Test files
│   ├── testsuite.spec.ts
│   
├── pages/                  # Page Objects
│   ├── accessibility.ts
│   ├── adminPage.ts
│   ├── homePage.ts
│   ├── reservePage.ts
│
├── test-results/                  # Results
│   ├── .last-run.json
│   ├── more will populate here on failures
│
│
├── constants.ts
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
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


##  Test Coverage
| Test | Description |
|------|-------------|
| `Book a room` | Creates a room and books it for a week between the 12th and 19th of the following month |
| `Send message` | Sends a valid message to the website |
| `Check error message for empty fields` | Checks the error message on the home page and the reserve page |
| `Check accessibility` | Ensures that the accessibility has not regressed |


## Page Object Model
| Page | Purpose |
|------|---------|
| `accessibilityPage.ts` | Runs accessibility test |
| `adminPage.ts` | Creates room and checks for succesful messages and room bookings |
| `homePage.ts` | Manages all the interacteractions with the home page |
| `reservePage.ts` | Manages all the interacteractions with the reserve page |

## Utility Files
- `constants.ts`: Stores credentials and test inputs for reusability.

---

