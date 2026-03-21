class SalariesPage {
   
    get quartileBlockText() { return $('#q1 h4.dws-block-header') }


    async open() {
        await browser.url('https://jobs.dou.ua/salaries/?period=2025-12&group=1&position=all');
    }



}
export default new SalariesPage()