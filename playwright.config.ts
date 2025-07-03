import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,                      // Show browser UI (true for CI)
    viewport: { width: 1280, height: 720 }, // Default browser window size
    ignoreHTTPSErrors: true,              // Accept self-signed certs if needed
    video: 'retain-on-failure',           // Keep videos only when tests fail
    screenshot: 'only-on-failure',        // Take screenshots only on failure
    trace: 'retain-on-failure',           // Collect trace only on failure
    actionTimeout: 90000,                 // Maximum time for actions (90s for performance_glitch_user)
    navigationTimeout: 90000,             // Maximum time for page loads  
  },
  timeout: 120000,                        // Maximum time for one test step (2 minutes)
  expect: {
    timeout: 90000,                       // Maximum time for expect assertions
  },
});
