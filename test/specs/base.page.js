class BasePage {

   

    get signUpButton() { return $('.HeaderMenu-link--sign-up') }

    get copilotCtaBlock() {return $("//h2[contains(text(),'Millions of developers and businesses call GitHub')]")}
    get copilotButton() {return $('a[href="/github-copilot/pro"]')}
    get copilotTrialBlock() {return $("h1[class='text-center']")}
    get subscribeButton() {return $('a[href="https://github.com/newsletter"]')}
    get searchButton() {return $('[aria-label="Search or jump to…"]')}
    get searchInput() {return $('#query-builder-test')}
    get searchDropdown() {return $('.search-suggestions');}
    get firstSuggestion() {return this.searchDropdown.$('#query-builder-test-result-0')}
    get firstResultLink() {return $("a[href='/nektos/act']")}
     get pricingLink() {return $("a[href='https://github.com/pricing']")}

   
     async open() {
        await browser.url('https://github.com');
    }
    

    async scrollToCopilotCtaBlock() {
         await this.copilotCtaBlock.scrollIntoView();
         await this.copilotCtaBlock.waitForDisplayed({timeout: 5000})
    }

    async clickSignUpButton() {
         await this.signUpButton.waitForDisplayed();
         await this.signUpButton.click();
}



    async clickCopilotButton() {
        await this.scrollToCopilotCtaBlock()
        await this.copilotButton.waitForDisplayed({ timeout: 5000 })
        await browser.execute(el => el.click(), await this.copilotButton);
    }

    async scrollToSubscribeBlock(){
        await this.subscribeButton.scrollIntoView()
        await this.subscribeButton.waitForDisplayed({ timeout: 5000 })

    }
    async clickSubscribeButton(){
        await this.scrollToSubscribeBlock()
        await this.subscribeButton.click()

    }

    async searchAndSelect(text) {
        await this.searchButton.waitForDisplayed({ timeout: 5000 })
        await this.searchButton.click()
        await this.searchInput.waitForDisplayed({ timeout: 5000 })
        await this.searchInput.setValue(text)
        await this.firstSuggestion.waitForClickable()
        await browser.keys('Enter')
    }

    async navigateToPricingLink(){
        await this.pricingLink.click()
        
    }
  
    
}
export default new BasePage()