import { test, expect } from '@playwright/test';

test.describe("Testing API", () => {
    test('Testing contact API', async ({ page, request }) => { 
        const sendMessage = await request.post("/api/contact", {
            data: {
                firstName: "Lukas",
                lastName: "Hotovy",
                email: "test@email.com",
                textInput: "Hello!"
            }
        });
        console.log(await sendMessage.json());        
        expect(sendMessage.ok()).toBeTruthy();        
     });
});