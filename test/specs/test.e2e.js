import { browser, expect } from '@wdio/globals'

describe("Webdriverio main page", () => {

    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle(
            /WebdriverIO.*automation test framework/
        )
    });
    xit("should show addValue command", async () => {
    await browser.url('https://the-internet.herokuapp.com/login');

    let input = await $("#username")
    await input.addValue("hello")
    await browser.pause(2000)

    await input.addValue(123)
    await browser.pause(2000)

    await expect(input).toHaveValue("hello123")
});


xit("should show setvalue comand", async()=>{
    await browser.url('https://the-internet.herokuapp.com/login');
    let input = await $('#username')
    await input.setValue("world")
    await browser.pause(2000)
    await input.setValue("hello")
    await browser.pause(2000)

    console.log(await input.getValue())
    await expect(input).toHaveValue("hello")

});

xit("", async()=>{
await browser.url('https://the-internet.herokuapp.com/login');
let loginButton = await $('.radius')
await loginButton.click()
await browser.pause(2000)
let inputUsername = await $("#username")
await inputUsername.addValue("tomsmith")

let inputPassword = await $("#password")
await inputPassword.addValue("SuperSecretPassword")

await loginButton.click()
await browser.pause(2000)

});


it("should show getAttribute command", async()=> {
await browser.url('https://dou.ua/search');
let inputSearch = await $('#gsc-i-id1')
let attr  = await inputSearch.getAttribute("aria-label")
console.log("Placeholder attribute is:" + attr)

await inputSearch.setValue("Cat")
attr = await inputSearch.getValue()
await browser.pause(2000)
console.log("Placehodler attribute is:" + attr)

});

it( "should show getLocation command", async() =>{
 await browser.url('https://dou.ua');

 let inputSearch = await $('#txtGlobalSearch')
 let location = await inputSearch.getLocation()
 console.log("location is " + location)

})
});
