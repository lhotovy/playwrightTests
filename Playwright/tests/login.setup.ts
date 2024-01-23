import { test as setup, expect } from '@playwright/test';
import data from "../testData/user.json";
import { STORAGE_STATE } from '../../playwright.config';

setup('Login setup', async ({ page }) => {  
    const { mail, password } = data;
    await page.goto('/');
    await page.getByRole('button', { name: "Login" }).click();
    await page.getByLabel('Email').click();   
    await page.getByLabel('Email').fill(mail);
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill(password);
    await page.getByRole('button', { name: 'Log In', exact: true }).click();
    await expect(page.getByText("Logged in successfully!")).toBeVisible();

    await page.context().storageState({ path: STORAGE_STATE });
});