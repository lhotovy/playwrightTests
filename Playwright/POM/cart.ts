import { Locator, type Page } from "@playwright/test";

class Cart {
    readonly page: Page;
    readonly addToCartButton: Locator; 
    readonly cartLink: Locator;
    readonly textBox: Locator;
    readonly subtotal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.cartLink = page.getByRole('link', { name: 'cart' });
        this.textBox = page.getByRole('textbox');
        this.subtotal = page.locator('[data-test="subtotal"]');
    };       

    addItemToCart = async (item: number, times: number) => {      
        for (let i = 0; i < times; i++) {
            await this.addToCartButton.nth(item).click();       
        };
    };    
};

export default Cart;