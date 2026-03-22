
class PricingPage {
get pricingPageTitle() {return $("h1[class='h2-mktg']")}
get compareAllFeaturesLink() {return $("a[href*='#compare-features']")}
get compareFeaturesTitle() {return $('//h1[text()="Compare features"]')}



  async navigateToCompareFeaturesPage() {

    await this.compareAllFeaturesLink.scrollIntoView()
    await this.compareAllFeaturesLink.click()
}












}
export default new PricingPage ()