import { test, expect } from '../fixtures/webster-app';

test.describe("Testing landing page", () => {
  test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
  });

  test('Testing presence of elements on landing page', async ({ landingPage }) => {   
      const { getHomeLink, eshopLink, contactLink, loginButton, logoButton,
              rights, author, linkedIn, github } = landingPage;        
      await expect(getHomeLink).toBeVisible();
      await expect(eshopLink).toBeVisible();
      await expect(contactLink).toBeVisible();
      await expect(loginButton).toBeVisible();
      await expect(logoButton).toBeVisible();
      await expect(rights).toBeVisible();
      await expect(author).toBeVisible();
      await expect(linkedIn).toBeVisible();
      await expect(github).toBeVisible();
  });

  test('Testing link attributes on landing page', async ({ landingPage }) => {
      const { getHomeLink, eshopLink, contactLink, loginButton, 
        linkedIn, github, goToEshop } = landingPage;   
      await expect(getHomeLink).toHaveAttribute("href", "/");
      await expect(eshopLink).toHaveAttribute("href", "/eshop");
      await expect(contactLink).toHaveAttribute("href", "/contact");
      await expect(loginButton).toHaveAttribute("href", "/login");
      await expect(goToEshop).toHaveAttribute("href", "/eshop");
      await expect(linkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/lhotovy/");
      await expect(github).toHaveAttribute("href", "https://github.com/lhotovy");
  });
});
