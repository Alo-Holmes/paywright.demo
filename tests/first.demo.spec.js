//const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
});

test('Check radio button', async ({ page }) => {
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
     
});

test('Autocomplete/Suggestion',async ({ page }) => {
  await page.getByPlaceholder('Type to Select Countries').click();
  await page.getByPlaceholder('Type to Select Countries').fill('south');
  await page.locator('#ui-id-3').click();
});

test('Select option 1 from dropdown', async ({ page}) => {
  await page.locator('#dropdown-class-example').selectOption('option1');
  await page.locator('#checkBoxOption1').check();
});
