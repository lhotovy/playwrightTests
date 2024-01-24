import { expect, Browser, Page, chromium } from '@playwright/test';
import data from "../testData/user.json";
import { STORAGE_STATE } from '../../playwright.config';

const loginSetup = async () => {
    const browser: Browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    const { mail, password } = data;
    await page.goto('https://websters-eshop.vercel.app');
    await page.getByRole('button', { name: "Login" }).click();
    await page.getByLabel('Email').click();   
    await page.getByLabel('Email').fill(mail);
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill(password);
    await page.getByRole('button', { name: 'Log In', exact: true }).click();
    await expect(page.getByText("Logged in successfully!")).toBeVisible();
    await page.waitForTimeout(5000);

    await page.context().storageState({ path: STORAGE_STATE }); 
    await browser.close();
};

export default loginSetup;