import { test, expect } from '@playwright/test';

test('比對 heading', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('heading', { name: 'Hello, playwrightSample' }).click();
});
