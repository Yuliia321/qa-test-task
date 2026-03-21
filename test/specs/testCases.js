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
/* Verify that a new user can reach the verification step during sign-up
Preconditions:
The user does not have an existing account on GitHub
The user has a valid email address
Steps:
Navigate to https://github.com
Click on the Sign up button - - user is redirected to new page https://github.com/signup?source=form-home-signup&user_email=fhyhyhf%40gmail.com
Enter a valid email address
Enter a valid password
Enter a unique username
click create account button
ER:The user is redirected to the verification step
The “Verify your account” page is displayed
*/


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



    /**Verify that user can search repositories using search functionality
Preconditions
User opens GitHub
User is on the main page: https://github.com
Steps
Click on the search field in the header 
Enter a valid search query (e.g., react)
Press Enter
Expected Result
User is redirected to search results page
Search results are displayed
Results match the entered query */
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




/**Verify that user can open "Explore GitHub Actions" page
Preconditions:
User is logged out or on the GitHub main page (https://github.com)
Browser is open and ready
Steps:
Open https://github.com in the browser.
click the Explore menu in the header.
From the dropdown menu, click on GitHub Actions.
Wait for the page to load.
Expected Results:
Browser URL contains /features/actions */
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


