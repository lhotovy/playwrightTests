import { test as setup, expect } from '@playwright/test';
import data from "../testData/user.json";
import { STORAGE_STATE } from '../../playwright.config';

// setup('Testing login', async ({ page }) => {  
//     const{ mail, password } = data;
//     await page.goto('/');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await page.getByLabel('Email').click();
//     await page.getByLabel('Email').fill(mail);
//     await page.getByLabel("Password").click();
//     await page.getByLabel("Password").fill(password);
//     await page.getByRole('button', { name: 'Log In', exact: true }).click();
//     await expect(page.getByText("Logged in Successfully!")).toBeVisible();

//     await page.context().storageState({ path: STORAGE_STATE });
// });

setup('Capacities Login setup', async ({ page }) => {  
    const{ mail, password } = data;
    await page.goto('https://dev.capacities.app/auth/signin');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill("tco92953@zslsz.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("Cypress123!");
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByText("Select Start Month")).toBeVisible();

    await page.context().storageState({ path: STORAGE_STATE });
});