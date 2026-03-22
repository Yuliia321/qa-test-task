import { browser, expect } from '@wdio/globals'
import assert from 'assert'
import BasePage from './base.page'
import SignUpPage from './signUpPage'
import newsletterPage from './newsletterPage'
import { generateRandomEmail, generateUsername } from './utils/dataGenerator.js'
import PricingPage from './pricingPage.js'

describe("GitHub ", () => {



   it("should allow user to reach verification step", async () => {
        const email = generateRandomEmail();
        const username = generateUsername();
        const password = `TestPassword!${Date.now()}A#`;

        await BasePage.open();
        await BasePage.signUpButton.waitForDisplayed();
        await BasePage.signUpButton.click();

        await SignUpPage.emailInput.setValue(email);
        await SignUpPage.passwordInput.setValue(password);
        await SignUpPage.usernameInput.setValue(username);

       await browser.waitUntil(
            async () => await SignUpPage.createAccountButton.isEnabled(),
         { timeout: 5000, timeoutMsg: 'Create account button  is not enabled after 5s' }
         );

 // console.log(await SignUpPage.createAccountButton.isDisplayed()); // true/false
// console.log(await SignUpPage.createAccountButton.isEnabled());   // true/false
      

       await SignUpPage.clickCreateAccountButton();


        await SignUpPage.title.waitForDisplayed({ timeout: 5000 });
       await expect(SignUpPage.title).toHaveText(
       expect.stringContaining("Verify your account")
);

}) 
 it("should open copipot trial" , async() => {
       await BasePage.open();
       await BasePage.scrollToCopilotCtaBlock()
       await BasePage.clickCopilotButton()
       await expect(BasePage.copilotTrialBlock).toHaveText(
       expect.stringContaining("Try Copilot Pro for 30 days free"))

      

 })

 it("check subscribe block" , async() => {
    const email = generateRandomEmail()
       
       await BasePage.open()
       await BasePage.scrollToSubscribeBlock()
       await expect(BasePage.subscribeButton).toBeClickable()
       await BasePage.clickSubscribeButton()
       await expect(newsletterPage.newsletterTitle).toHaveText('Get our developer newsletter')
       await newsletterPage.enterEmail(email)
       await newsletterPage.selectCountry('Albania')
       await expect(newsletterPage.countryInput).toHaveValue('AL')
       await newsletterPage.toggleMarketingEmails()
       await newsletterPage.clickSubscribeButton()
       await expect(newsletterPage.confirmationBlock).toBeDisplayed()
       
       
 })

 it("check search action" , async() =>{
     const query = 'act'
      await BasePage.open()
      await BasePage.searchAndSelect(query)
      await expect(browser).toHaveUrl(expect.stringContaining(`q=${query}`))
      await expect(BasePage.firstResultLink).toHaveAttribute('href', expect.stringContaining(query))


 })

it("" , async() => {

      await BasePage.open()
      await BasePage.navigateToPricingLink()
      await expect(PricingPage.pricingPageTitle).toBeDisplayed()
      await PricingPage.navigateToCompareFeaturesPage()
      await expect(PricingPage.compareFeaturesTitle).toBeDisplayed()
})


 
}) 
