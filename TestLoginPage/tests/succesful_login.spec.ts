import { test, expect } from '@playwright/test';

test ('Login is Succesful', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');

    await page.getByPlaceholder('Username').fill('practice');
    await page.getByPlaceholder('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login'}).click();

    await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout'})).toBeVisible();
});