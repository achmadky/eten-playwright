import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://eten-ui.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
});

test('get food info of apple pie', async ({ page }) => {
  await page.goto('https://eten-ui.vercel.app/');

  const enterFoodName = page.getByPlaceholder('Enter food name');


  // Click and input food
  await enterFoodName.fill("Apple");
  await page.getByRole('option', { name: 'Apple pie', exact: true }).locator('div').click();

  await page.getByRole('button', { name: 'Search' }).click();

  // click apple pie
  await page.getByRole('heading', { name: 'Apple pie' })

  // should return info about apple pie
  await expect(page.getByText('Cholesterol: 10 mg')).toBeVisible();
  await expect(page.getByText('Calories: 237 kcal')).toBeVisible();
});
