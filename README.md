# Demo QA - PlayWright Assignment



npx playwright test --project=chromium => run test in headless mode in chrome browser

npx playwright test --headed --project=chromium => run test in headed (UI) mode in chrome browser

npx playwright test --project=firefox => run test in headless mode in firefox browser

npx playwright test --headed --project=firefox => run test in headed (UI) mode in firefox browser

npx playwright test --project=webkit => run test in headless mode in safari browser

npx playwright test --headed --project=webkit => run test in headed (UI) mode in safari browser

npx playwright test --headed => run all tests in headed mode in parallel on chrome, firefox, safari browser

npx playwright test => run all tests in headless mode in parallel on chrome, firefox, safari browser
