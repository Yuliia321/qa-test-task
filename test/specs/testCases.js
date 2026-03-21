import { browser, expect } from '@wdio/globals'
import assert from 'assert'

function generateRandomEmail() {
    const timestamp = Date.now() 
    return `test_${timestamp}@example.com`
}

function generateUsername() {
    const timestamp = Date.now() 
    return `testUsername${timestamp}`
}



describe("GitHub Sign Up", () => {

     beforeEach(async () => {

        await browser.url('https://github.com')
    })


    xit("should allow user to reach verification step", async () => {
            
        const heroText = await $("//*[contains(., 'The future of building happens together')]")
        await heroText.scrollIntoView() 
        const emailInput = await $('#hero_user_email')
        const email = generateRandomEmail()
        await emailInput.click()
        await emailInput.setValue(email)
        await expect(emailInput).toHaveValue(email)

        const signUpButton = await heroText.$("//following::button[contains(., 'Sign up for GitHub')]")
        await signUpButton.waitForDisplayed({ timeout: 5000 })
        await signUpButton.click()
        
        const passwordField = await $('#password')
        passwordField.setValue("qwertY1234567$")
    
        const usernameInput = await $('#login')
        await usernameInput.waitForDisplayed({ timeout: 5000 })

        const randomUsername = generateUsername()  
        await usernameInput.setValue(randomUsername)

        const submitButton = await $("button[data-target='signup-form.SignupButton']")
        submitButton.scrollIntoView()
        await submitButton.waitForEnabled({ timeout: 10000 }) 
        submitButton.click()
        const expectedUrl = 'https://github.com/signup?source=form-home-signup&user_email=' + encodeURIComponent(email)
        await expect(browser).toHaveUrl(expectedUrl)             
    })

    xit("Verify that user can search repositories using search functionality " , async() => {

      const searchButton = await $('[aria-label="Search or jump to…"]')
      await searchButton.waitForDisplayed({ timeout: 5000 })
      await searchButton.click()

      const searchInput = await $('#query-builder-test')
      await searchInput.waitForDisplayed({ timeout: 5000 })
      
      const searchValue = 'react'
      await searchInput.setValue(searchValue)
      await browser.keys('Enter')
      await expect(browser).toHaveUrl("https://github.com/search?q=react&type=repositories")

      let results;

      await browser.waitUntil(async () => {
        results = await $$('a[href*="/react"]');
        return results.length > 0;
    }, {
        timeout: 10000,
        timeoutMsg: 'Expected at least one repo link to be visible'
    });
    })


    xit(" Verify that user can open GitHub Actions link" , async() => {

    const actionsLink = await $("//a[@href='/features/actions']")
    await actionsLink.waitForDisplayed({ timeout: 5000 });
    await actionsLink.click();
    await expect(browser).toHaveUrl(/\/features\/actions/);
    const actionsLabel = await $('span=GitHub Actions');
    await actionsLabel.waitForDisplayed({ timeout: 5000 });
    await expect(actionsLabel).toBeDisplayed();


    }
)
})


