
class DropDopwn {

    // properties/elements

    get skillDropDown() {
        return $("#select_tool")
    }


    // behavior / action
    async gotoDropDownPage () {
        await browser.url('https://play1.automationcamp.ir/forms.html')
    }

    async selectProtractor () {
       const skillDropDown = await this.skillDropDown
       await skillDropDown.selectByVisibleText("Protractor")

    }
    async selectCypress () {
        const skillDropDownElm = await this.skillDropDown
        await skillDropDownElm.selectByIndex(2)

    }

    async selectSelenium () {
        const skillDropDownElm = await this.skillDropDown
        await skillDropDownElm.selectByAttribute("value","sel")
    }
}

export default new DropDopwn();
