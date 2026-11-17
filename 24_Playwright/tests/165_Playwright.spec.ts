import { expect, test } from '@playwright/test';

async function getExample() {
  return 'abc';
}

test('navigates to Playwright and awaits a helper', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  const result = await getExample();
  expect(result).toBe('abc');
});
