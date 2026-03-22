class BasePage {

   

    get signUpButton() { return $('.HeaderMenu-link--sign-up') }



   
     async open() {
        await browser.url('https://github.com');
    }
    

    async clickSignUpButton() {
         await this.signUpButton.waitForDisplayed();
         await this.signUpButton.click();
}

}
export default new BasePage()