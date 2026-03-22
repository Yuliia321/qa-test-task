import { browser, expect } from '@wdio/globals'
import mainPage from './main.page'
import SalariesPage from './salariesPage'
import JobPage from './jobPage'
import DefPage from './DefPage'


describe("dou tests" , async()=> {

    it("should display quartile block text ", async() => {

          await mainPage.open()
          await SalariesPage.open()
          await expect(SalariesPage.quartileBlockText).toBeDisplayed();
          await expect(SalariesPage.quartileBlockText).toHaveText('I КВАРТИЛЬ')

    });

    it("should have search button" , async() =>{
       await mainPage.open()
       await JobPage.open()
       await expect(JobPage.searchBtn).toBeDisplayed();
       await JobPage.clickSearchBtn()
       await expect(JobPage.quickTransitionBlock).toBeDisplayed
    })

    it("should have 3 sections", async() => {
        await DefPage.open()
        await expect(DefPage.newsBlock).toBeDisplayed
        await expect(DefPage.eventBlock).toBeDisplayed
        await expect(DefPage.blogBlockk).toBeDisplayed



    })











});