import { Locator, type Page } from "@playwright/test";

class LandingPage {
    readonly page: Page;
    readonly getHomeLink: Locator;
    readonly eshopLink: Locator;
    readonly contactLink: Locator;
    readonly loginButton: Locator;
    readonly logoButton: Locator;
    readonly rights: Locator;
    readonly author: Locator;
    readonly linkedIn: Locator;
    readonly github: Locator;
    readonly goToEshop: Locator;    

    constructor(page: Page) {
        this.page = page;  
        this.getHomeLink = page.getByRole("link").getByText("Home");
        this.eshopLink = page.getByRole("link").getByText("E-Shop", {exact: true});
        this.contactLink = this.page.getByRole('link', { name: 'Contact' });
        this.loginButton = page.getByRole('link', { name: 'Login' });
        this.logoButton = page.locator('[data-test="logoButton"]');
        this.rights = page.getByText('© 2024 Webster\'s. All Rights');
        this.author = page.getByText('by Lukáš Hotový');
        this.linkedIn = page.locator('[data-test="footer-linkedin"]');
        this.github = page.locator('[data-test="footer-github"]');
        this.goToEshop = page.getByRole('link', { name: 'Go to E-shop' });
    }; 
};

export default LandingPage;