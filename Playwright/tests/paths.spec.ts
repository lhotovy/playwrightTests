import { test, expect } from '../fixtures/webster-app';
import data from "../testData/user.json";

test.describe("Testing paths through applicaton", () => {
  test.beforeEach(async ({ page }) => {    
    await page.goto('https://websters-eshop.vercel.app/');    
  });

  test('Put items to cart, navigate to cart and verify amounts', async ({ page, cart, landingPage }) => {   
    const { goToEshop } = landingPage; 
    const { addToCartButton, addItemToCart, cartLink, textBox, subtotal } = cart;
    
    // Navigate to E-shop and add items to cart
    await goToEshop.click();
    await expect(addToCartButton).toHaveCount(6);
    await addItemToCart(1, 2);
    await expect(addToCartButton.nth(1)).toHaveText("Add to cart (2)");
    await addItemToCart(3, 3);
    await expect(addToCartButton.nth(3)).toHaveText("Add to cart (3)");   
    await addItemToCart(5, 1);
    await expect(addToCartButton.nth(5)).toHaveText("Add to cart (1)");

    // Navigate to cart and verify amounts
    await cartLink.click();
    await expect(textBox.first()).toHaveValue('2');
    await expect(textBox.nth(1)).toHaveValue('3');
    await expect(textBox.nth(2)).toHaveValue('1');
    await expect(page.getByText('€100', {exact: true})).toBeVisible();
    await expect(page.getByText('€300', {exact: true})).toBeVisible();
    await expect(page.getByText('€30', {exact: true})).toBeVisible();
    await expect(subtotal).toContainText('Subtotal: €430');
  });

  test('Testing login', async ({ landingPage, loginPage }) => {  
      const { mail, password } = data; 
      const { goToLoginButton } = landingPage;  
      const { emailField, passwordField, loginButton, successMessage } = loginPage;       
      await goToLoginButton.click();
      await emailField.click();
      //await page.getByLabel('Email').fill(process.env.USER!);
      await emailField.fill(mail);
      await passwordField.click();
      //await page.getByPlaceholder('Doe', { exact: true }).fill(process.env.PASSWORD!);
      await passwordField.fill(password);
      await loginButton.click();
      await expect(successMessage).toBeVisible();
  });
});