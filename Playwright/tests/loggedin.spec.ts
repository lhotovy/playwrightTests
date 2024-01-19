import { test, expect } from '@playwright/test';


test.skip('should first', async ({page}) => { 
    await page.goto('/dashboard');
    expect(page.getByText("Hi, qqq")).toBeVisible();
});