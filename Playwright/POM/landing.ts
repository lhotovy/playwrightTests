import { type Page } from "@playwright/test";

class LandingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;  
    };

    get getHomeLink() {
        return this.page.getByRole("link").getByText("Home");
    };

    get eshopLink() {
        return this.page.getByRole("link").getByText("E-Shop", {exact: true});
    };

    get contactLink() {
        return this.page.getByRole('link', { name: 'Contact' });
    };

    get loginButton() {
        return this.page.getByRole('link', { name: 'Login' });
    };

    get logoButton() {
        return this.page.locator('[data-test="logoButton"]');
    };

    get rights() {
        return this.page.getByText('© 2024 Webster\'s. All Rights');
    };

    get author() {
        return this.page.getByText('by Lukáš Hotový');
    };

    get linkedIn() {
        return this.page.locator('[data-test="footer-linkedin"]');
    };

    get github() {
        return this.page.locator('[data-test="footer-github"]');
    };

    get goToEshop() {
        return this.page.getByRole('link', { name: 'Go to E-shop' });
    };
       
};

export default LandingPage;