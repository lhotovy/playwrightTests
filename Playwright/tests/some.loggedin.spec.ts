import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("/");
});

test('Should continue in logged in state', async ({page}) => {
    //await page.getByRole("button", { name: "Save Changes"}).click();
});