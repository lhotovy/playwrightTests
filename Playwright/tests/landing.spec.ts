import { test, expect } from '@playwright/test';
import LandingPage from "../POM/landing";


test.describe("Testing landing page", () => {
  test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
  });

  test('Testing presence of elements on landing page', async ({ page }) => {   
      const landing = new LandingPage(page);         
      await expect(landing.getHomeLink).toBeVisible();
      await expect(landing.eshopLink).toBeVisible();
      await expect(landing.contactLink).toBeVisible();
      await expect(landing.loginButton).toBeVisible();
      await expect(landing.logoButton).toBeVisible();
      await expect(landing.rights).toBeVisible();
      await expect(landing.author).toBeVisible();
      await expect(landing.linkedIn).toBeVisible();
      await expect(landing.github).toBeVisible();
  });

  test('Testing link attributes on landing page', async ({ page }) => {
      const landing = new LandingPage(page); 
      await expect(landing.getHomeLink).toHaveAttribute("href", "/");
      await expect(landing.eshopLink).toHaveAttribute("href", "/eshop");
      await expect(landing.contactLink).toHaveAttribute("href", "/contact");
      await expect(landing.loginButton).toHaveAttribute("href", "/login");
      await expect(landing.goToEshop).toHaveAttribute("href", "/eshop");
      await expect(landing.linkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/lhotovy/");
      await expect(landing.github).toHaveAttribute("href", "https://github.com/lhotovy");
  });
});
