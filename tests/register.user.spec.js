import {test, expect} from '@playwright/test';

test.beforeEach( async ({ page }) => {
 await page.goto ('https://automationexercise.com/')
});

 test('register a new user', async ({ page }) => {
    
  // STEP 1
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByPlaceholder('Name').isVisible();
    await page.getByPlaceholder('Name').click();
  
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Auto Bots');

    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('auto.bots@test.com');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').press('Tab');
    await page.getByRole('button', { name: 'Signup' }).click();

  // STEP 2 
    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Test123');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('2003');
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Auto');
    await page.getByLabel('First name *').press('Tab');
    await page.getByLabel('Last name *').fill('Bots');
    await page.getByLabel('Company', { exact: true }).click();
    await page.getByLabel('Company', { exact: true }).fill('Transformers Corp.');
    await page.getByLabel('Company', { exact: true }).press('Tab');
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Dark side of the moon');
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').press('Tab');
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').click({
      modifiers: ['Shift']
    });

    // Step 3
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').isVisible;
    // await page.getByLabel('Address 2').click();
    await page.getByLabel('Address 2').fill('Anothert galaxy');
    // await page.getByLabel('Address 2').press('Tab');
    await page.getByLabel('Country *').selectOption('United States');
    // await page.getByLabel('State *').click();
    await page.getByLabel('State *').fill('California');
    // await page.getByLabel('State *').press('Tab');
    await page.getByLabel('City *').fill('Los Angeles');
    // await page.getByLabel('City *').press('Tab');
    // await page.locator('#zipcode').press('Tab');
    // await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('n/a');
    // await page.locator('#zipcode').press('Tab');
    await page.getByLabel('Mobile Number *').fill('000 555 0911');
    await page.goto('https://automationexercise.com/account_created');
    await page.getByText('Account Created! Congratulations! Your new account has been successfully created').isVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    // await page.getByText('Account Created!').click({
    //   button: 'right'
    });
  
    
  

  
    
  

