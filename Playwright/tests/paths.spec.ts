import { test, expect } from '@playwright/test';
import Cart from "../POM/cart";
import LandingPage from "../POM/landing";
import data from "../testData/user.json";

test.describe("Testing paths through applicaton", () => {
  test.beforeEach(async ({ page }) => {    
    await page.goto('/');    
  });

  test('Put items to cart, navigate to cart and verify amounts', async ({ page }) => {   
    const landing = new LandingPage(page);   
    const cart = new Cart(page);
    
    // Navigate to E-shop and add items to cart
    await landing.goToEshop.click();
    await expect(cart.addToCart).toHaveCount(6)
    await cart.addToCart.nth(1).click();
    await cart.addToCart.nth(1).click();
    await expect(cart.addToCart.nth(1)).toHaveText("Add to cart (2)");
    await cart.addToCart.nth(3).click();
    await cart.addToCart.nth(3).click();
    await cart.addToCart.nth(3).click();
    await expect(cart.addToCart.nth(3)).toHaveText("Add to cart (3)");
    await cart.addToCart.nth(5).click();
    await expect(cart.addToCart.nth(5)).toHaveText("Add to cart (1)");

    // Navigate to cart and verify amounts
    await page.getByRole('link', { name: 'cart' }).click();
    await expect(page.getByRole('textbox').first()).toHaveValue('2');
    await expect(page.getByRole('textbox').nth(1)).toHaveValue('3');
    await expect(page.getByRole('textbox').nth(2)).toHaveValue('1');
    await expect(page.getByText('€100', {exact: true})).toBeVisible();
    await expect(page.getByText('€300', {exact: true})).toBeVisible();
    await expect(page.getByText('€30', {exact: true})).toBeVisible();
    await expect(page.locator('[data-test="subtotal"]')).toContainText('Subtotal: €430');
  });

  test('Testing login', async ({ page }) => {  
      const{ mail, password } = data;
      await page.getByRole('button', { name: 'Login' }).click();
      await page.getByLabel('Email').click();
      await page.getByLabel('Email').fill(mail);
      await page.getByLabel("Password").click();
      await page.getByLabel("Password").fill(password);
      await page.getByRole('button', { name: 'Log In', exact: true }).click();
      await expect(page.getByText("Logged in Successfully!")).toBeVisible();
  });
});