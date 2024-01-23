import { Locator, type Page } from "@playwright/test";

class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.getByLabel('Email');
        this.passwordField = page.getByLabel("Password");
        this.loginButton = page.getByRole('button', { name: 'Log In', exact: true });
        this.successMessage = page.getByText("Logged in Successfully!");
    }; 
};

export default LoginPage;