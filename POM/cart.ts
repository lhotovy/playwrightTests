import { type Page } from "@playwright/test";

class Cart {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;  
    };

    get addToCart() {
        return this.page.getByRole('button', { name: 'Add to cart' });
    };
       
};

export default Cart;