import { browser, expect } from '@wdio/globals'
import assert from assert

describe("Webdriverio main page", () => {

    it("should open  API page", async () => {
        await browser.url('https://webdriver.io/');


        const apiLink =  await $('a=API')
        await apiLink.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/docs/api'))
        const introHeader = await $('h1=Introduction')
        await expect(introHeader).toBeDisplayed()
        await expect(introHeader).toHaveText('Introduction')

       // const headerText = await introHeader.getText();
        //await expect(headerText).toBe('Introduction');

        const breadcrumbLink = await $(".breadcrumbs__link")
        await expect(breadcrumbLink).toBeDisplayed()
    });

        
    it("should navigate to WebDriver section", async () => {
        const webDriverLink = await $('a=WebDriver')
        await expect(webDriverLink).toHaveText('WebDriver')
        const href = await webDriverLink.getAttribute('href')
        await expect(href).toBe('/docs/api/webdriver')
        await webDriverLink.click();
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api/webdriver');
    });

    it("should use search", async () => {
        const searchField = await $(".DocSearch-Button-Placeholder")
        await searchField.click()
        const searchInput = await  $(".DocSearch-Input")
        await searchInput.setValue("all is done")
        const closeButton = await $(".DocSearch-Reset")
        await closeButton.click()
        await expect(searchInput).toHaveValue('')
      // await browser.pause(20000) 
    });

    it("should demonstrate  scrollIntoView command ", async()=>{
        await browser.url('https://webdriver.io/');
        const apiLink =  await $("nav a[href='/docs/api']")
        await apiLink.click()
        const getStartedButton = await $("ul a[href='/docs/gettingstarted']")
        await getStartedButton.scrollIntoView()

    });

    it("Checks if an element can be clicked", async()=> {
       await browser.url('https://webdriver.io/');
        const apiLink =  await $("nav a[href='/docs/api']")
        await apiLink.click()
        const protocolCommandLink = await $('.pagination-nav__label')
        await expect(protocolCommandLink).toBeClickable();
    });

    it("Should check if protocolCommandLink  is visible", async()=> {
       await browser.url('https://webdriver.io/');
        const apiLink =  await $("nav a[href='/docs/api']")
        await apiLink.click()
        const protocolCommandLink = await $('.pagination-nav__label')
        await expect(protocolCommandLink).toBeDisplayed();
    });

    it("should get html for element, click on it ", async()=> {
       await browser.url('https://webdriver.io/');
        const apiLink =  await $("nav a[href='/docs/api']")
        await apiLink.click()
        const protocolCommandLink = await $('.pagination-nav__label');
        const html = await protocolCommandLink.getHTML();
        console.log(html);
        await protocolCommandLink.click();
       });

     it("should wait until text WebDriver Protocol appear ", async()=> {
       await browser.url('https://webdriver.io/');
        const apiLink =  await $("nav a[href='/docs/api']")
        await apiLink.click()
        const protocolCommandLink = await $('.pagination-nav__label');
        
        await protocolCommandLink.click()
        const text = await $("#webdriver-protocol")
        await text.waitUntil(async function ()  {
        return (await this.getText()) === 'WebDriver Protocol'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to appear after 5s'
    })
       });



});