import { test, expect } from '@playwright/test';

test.describe("Testing API", () => {
    test('Testing contact API', async ({ request }) => { 
        const sendMessage = await request.post("/api/contact", {
            data: {
                firstName: "Lukas",
                lastName: "Hotovy",
                email: "test@email.com",
                textInput: "Hello!"
            }
        });
        //console.log(await sendMessage.json());        
        expect(sendMessage.ok()).toBeTruthy();        
     });
     
     //Testing public API with GET method
     test('Testing numbers API', async ({ page, request }) => { 
        const getRequest = await request.get("https://cat-fact.herokuapp.com/facts");
        //console.log(await getRequest.json());        
        expect(getRequest.ok()).toBeTruthy();        
     });
});