import { test as base } from "@playwright/test";
import Cart from "../POM/cart";
import LandingPage from "../POM/landing";
import LoginPage from "../POM/login";

type WebsterFixtures = {
    cart: Cart;
    landingPage: LandingPage;
    loginPage: LoginPage
};

export const test = base.extend<WebsterFixtures>({
    cart: async ({ page }, use) => {
        await use(new Cart(page));
    },

    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export { expect } from "@playwright/test";