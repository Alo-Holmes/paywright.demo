import {test, expect} from '@playwright/test';

// I need to add logic randomize the username and email on each run through of the test 


test.beforeEach( async ({ page }) => {
 await page.goto ('https://automationexercise.com/')
});

 test('register a new user', async ({ page }) => {
   
 
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).click();
  await page.getByPlaceholder('Name').isVisible();
  await page.getByPlaceholder('Name').fill('automation@test.za');
  await page.getByPlaceholder('Name').press('Tab');
  await page.getByPlaceholder('Name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Name').press('Control+a');
  await page.getByPlaceholder('Name').press('Control+x');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').isVisible();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('automation@test.za');
  await page.getByPlaceholder('Name').isVisible();
  await page.getByPlaceholder('Name').fill('John Tester');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Mr.').isVisible();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('Password *').isVisible();
  await page.getByLabel('Password *').fill('Test123');
  await page.locator('#days').isVisible();
  await page.locator('#days').selectOption('10');
  await page.locator('#months').isVisible();
  await page.locator('#months').selectOption('3');
  await page.locator('#years').isVisible();
  await page.locator('#years').selectOption('2003');
  await page.getByText('Address Information').isVisible();
  await page.getByLabel('First name *').isVisible();
  await page.getByLabel('First name *').fill('John');
  await page.getByLabel('First name *').press('Tab');
  await page.getByLabel('Last name *').fill('Tester');
  await page.getByLabel('Last name *').press('Tab');
  await page.getByLabel('Company', { exact: true }).fill('Test');
  await page.getByLabel('Company', { exact: true }).press('Tab');
  await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Test street');
  await page.getByLabel('Address 2').isVisible();
  await page.getByLabel('Address 2').fill('Test province');
  await page.getByLabel('Country *').selectOption('Singapore');
  await page.getByLabel('State *').isVisible();
  await page.getByLabel('State *').fill('Test state');
  await page.getByLabel('City *').isVisible();
  await page.getByLabel('City *').fill('Test City');
  await page.getByLabel('City *').press('Tab');
  await page.locator('#zipcode').fill('Test zip');
  await page.getByLabel('Mobile Number *').isVisible();
  await page.getByLabel('Mobile Number *').fill('000 555 0123');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').isVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  //await page.frameLocator('iframe[name="aswift_3"]').getByLabel('Close ad').click();
  await page.getByText('Logged in as John Tester').isVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByText('Account Deleted!').isVisible();
  //await page.getByRole('link', { name: 'Continue' }).click();
  
    });

  
  
    
  

  
    
  

