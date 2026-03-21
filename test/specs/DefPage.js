class DefPage {

    get  blogBlock() { return $('.b-index-columnisty') }
    get  newsBlock() { return $('.b-block_news')}
    get eventBlock() {return $('b-adv-events')}
  

    
    async open() {
        await browser.url('https://deftech.dou.ua/?from=button')
    }
}
export default new DefPage()