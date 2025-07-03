import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },
  timeout: 90000, // Para performance_glitch_user
  expect: {
    timeout: 30000,
  },
});
