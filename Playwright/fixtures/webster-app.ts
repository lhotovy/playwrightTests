import { test as base } from "@playwright/test";
import Cart from "../POM/cart";
import LandingPage from "../POM/landing";

type WebsterFixtures = {
    cart: Cart;
    landingPage: LandingPage;
};

export const test = base.extend<WebsterFixtures>({
    cart: async ({ page }, use) => {
        await use(new Cart(page));
    },

    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    }
});

export { expect } from "@playwright/test";