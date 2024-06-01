import dropDownPage from '../../pageobjects/dropDown.page.js'
import DropDown from  '../../pageobjects/dropDown.page.js'


describe('DropDown practice page', () => {

    it('should click on dropdown and select by text', async () => {
        await DropDown.gotoDropDownPage()
        await browser.pause(3000)
        await DropDown.selectProtractor()
        await browser.pause(3000)
        await DropDown.selectCypress()
        await browser.pause(3000)
        await DropDown.selectSelenium()
        await browser.pause(3000)
 
    })

})

