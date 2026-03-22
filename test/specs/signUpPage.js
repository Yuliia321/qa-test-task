import { browser, expect } from '@wdio/globals'


class SignUpPage {

 get emailInput() { return $('#email')}
 get passwordInput() { return $('#password')}
 get usernameInput() {return $('#login')}
 get createAccountButton() { return $("button[data-target='signup-form.SignupButton']")}
 get title() {return $("//h2[@id='verify-account-header']")}

 async clickEmailInput() {
         await this.emailInput.waitForDisplayed();
         await this.emailInput.click(); 
        }

 async clickPasswordInput() {
         await this.passwordInput.waitForDisplayed();
         await this.passwordInput.click();
        }
 async clickUsernameInput() {
        await this.usernameInput.click();
 }


async clickCreateAccountButton() {
  
  await this.createAccountButton.waitForDisplayed({ timeout: 5000 });

   
        await this.createAccountButton.scrollIntoView();

        await browser.pause(500);

   
        await browser.execute(el => el.click(), await this.createAccountButton);
    }}

export default new SignUpPage()