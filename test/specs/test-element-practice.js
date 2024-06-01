describe("practising various elements", () => {

    // it("checkbox", async () =>{

    //     await browser.url("https://demoqa.com/checkbox")
    //     await browser.pause(3000)
    //     const checkBox = await $('label[for="tree-node-home"]');
    //     const checkBoxById = await $('#tree-node-home')
    //     await checkBox.click();
    //     await browser.pause(1000)
    //     await checkBoxById.click()
    //     await browser.pause(1000)
    // })
    // it("radio button", async () =>{

    //     await browser.url("https://demoqa.com/radio-button")
    //     await browser.pause(5000)
    //     const radioYes = await $('label[for="yesRadio"]')
    //     await browser.pause(3000)
    //     // await radioYes.click()
    //     // await browser.pause(3000)
    //     const radioButtons = $$('label[class="custom-control-label"]')
    //     await radioButtons[0].click()
    //     await browser.pause(1000)
    //     await radioButtons[1].click()
    //     await browser.pause(1000)
    //     await radioButtons[2].click()
    // })
    // it("search button", async () =>{

    //     await browser.url("https://demoqa.com/webtables")
    //     await browser.pause(5000)
    //     const searchByPlaceHolder = await $('input[placeholder="Type to search"]')
    //     await searchByPlaceHolder.setValue("Vega")
    //     await browser.pause(5000)
    // })
    it("window", async () =>{

        await browser.url("https://demoqa.com/links")
        await browser.pause(5000)
        const mainWindow = await browser.getWindowHandle()
        const mainurl = await browser.getUrl();
        console.log("main window =========== ",mainWindow)
        console.log("main URL =========== ",mainurl)

        const getHomeLink = await $('#simpleLink')
        await getHomeLink.click();
        await browser.pause(5000)

        const currentWindow = await browser.getWindowHandles()
        await browser.switchToWindow(currentWindow[1]);
        const currentUrl = await browser.getUrl();
        console.log("current window =========== ",currentWindow)
        console.log("current URL =========== ",currentUrl)
        await browser.pause(5000)

        await browser.closeWindow();
        await browser.switchToWindow(mainWindow);
        await browser.pause(5000)
    })
    it("alert", async () =>{

        await browser.url("https://demoqa.com/alerts")
        await browser.pause(5000)
        //isAlertOpen(): 
        // getAlertText()
        //acceptAlert()
        //dismissAlert()
        //sendAlertText()
        
    })
})