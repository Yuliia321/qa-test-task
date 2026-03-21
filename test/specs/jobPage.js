class JobPage {

    get  searchBtn() { return $('input[value="Знайти"]') }
    get  quickTransitionBlock() { return $('.example')}
  



    async clickSearchBtn () {
        await this.searchBtn.click()
    }
    
    async open() {
        await browser.url('https://jobs.dou.ua/')
    }
}
export default new JobPage()