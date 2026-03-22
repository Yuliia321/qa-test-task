import { browser, expect } from '@wdio/globals'
import assert from 'assert'
import BasePage from './base.page'
import SignUpPage from './signUpPage'

function generateRandomEmail() {
    const timestamp = Date.now() 
    return `test_${timestamp}@example.com`
}

function generateUsername() {
    const timestamp = Date.now() 
    return `testUsername${timestamp}`
}
const password = `TestPassword!${Date.now()}A#`;


describe("GitHub Sign Up", () => {



   it("should allow user to reach verification step", async () => {
        const email = generateRandomEmail();
        const username = generateUsername();
     

        await BasePage.open();
        await BasePage.signUpButton.waitForDisplayed();
        await BasePage.signUpButton.click();

        await SignUpPage.emailInput.setValue(email);
        await SignUpPage.passwordInput.setValue(password);
        await SignUpPage.usernameInput.setValue(username);

        await browser.pause(2000);

  console.log(await SignUpPage.createAccountButton.isDisplayed()); // true/false
console.log(await SignUpPage.createAccountButton.isEnabled());   // true/false
      

       await SignUpPage.clickCreateAccountButton();


        await SignUpPage.title.waitForDisplayed({ timeout: 5000 });
       await expect(SignUpPage.title).toHaveText(
       expect.stringContaining("Verify your account")
);

}) 
}) 
