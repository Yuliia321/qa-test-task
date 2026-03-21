class MainPage {

    async open() {
        await browser.url('https://jobs.dou.ua/');
    }

    get salariesbtn() { return $('a[href="https://jobs.dou.ua/salaries/""]') }



      async open() {
        await browser.url('https://jobs.dou.ua/')
    }



    async clickOnSalariesPage () {
        await this.salariesbtn.click()

    }

}
export default new MainPage()