import { browser, expect } from '@wdio/globals'



class newsletterPage {

 get newsletterTitle() { return $('//h1[text()="Get our developer newsletter"]')}
 get workEmailInput() { return $("input[type='email']")}
 get countryInput() {return $("#form-field-country")}
 get marketingCheckboxWrapper() {return $('span.Primer_Brand__Checkbox-module__Checkbox-wrapper___qo8KL')}
 get subscribeButton() {return $("form button[type='submit']")}
 get confirmationBlock() {return $('#hero-section-brand-heading')}


 async enterEmail(email) {
     await this.workEmailInput.setValue(email)
 }

 async selectCountry(country) {
     await this.countryInput.selectByVisibleText(country)
 }
 async toggleMarketingEmails() {
    await this.marketingCheckboxWrapper.click()
}

async clickSubscribeButton() {
       await this.subscribeButton.click()
}
}

export default new newsletterPage ()