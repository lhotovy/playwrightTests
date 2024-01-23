import { Locator, type Page } from "@playwright/test";

class Cart {
    readonly page: Page;
    readonly addToCart: Locator

    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.getByRole('button', { name: 'Add to cart' });
    };       
};

export default Cart;