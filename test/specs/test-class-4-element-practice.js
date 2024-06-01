describe("Lets get used to", () => {

    it("Window Practise", async () =>{

        // land on the page
        await browser.url('https://demoqa.com/links')
        await browser.pause(3000);
        await browser.refresh
        // link grab korbo
        const linkForTheNewTab = await $('#simpleLink').click();
        // const linkForTheNewTab = await $('a[href="https://demoqa.com"]');
        // click
        // await linkForTheNewTab.click();
        await browser.pause(5000);
        // switch to new tab/window
        const totalTabs =  await browser.getWindowHandles()
        console.log("Total tabs", totalTabs.length)
        console.log("tabs ================= ",totalTabs)
        await browser.pause(3000);
        await browser.switchToWindow(totalTabs[1])
        await browser.pause(3000);
        const currentTabUrl = await browser.getUrl()
        console.log("Current Url == ",currentTabUrl)
        await browser.closeWindow()
        await browser.pause(2000);
        await browser.switchToWindow(totalTabs[0])
        const currentTabUrlMother = await browser.getUrl()
        console.log("Current mother Url == ",currentTabUrlMother)
        await browser.pause(3000);

        
        // get the new tab url
        // close the new tab
        // get back to the mother tab / window.   
    })

    it("Alert practoise", async () =>{
        // alert == warning / guide message/ error
        // alert yes/ no question/ accept, cancel
        // pompt text filed "jdsfkjaksdj" 
        // 
        await browser.url('https://demoqa.com/alerts')
        await browser.pause(3000)
        const normalAlert = await $('#confirmButton')
        await normalAlert.click()
        await browser.pause(3000)
        const alertText = await browser.getAlertText()
        console.log("Alert text ====================== ", alertText)
        await browser.acceptAlert()
        await browser.pause(3000)
        await normalAlert.click()
        await browser.pause(2000)
        await browser.dismissAlert()
        await browser.pause(2000)
        await browser.sendAlertText()

             //isAlertOpen(): 
	        // getAlertText()
	        //acceptAlert()
	        //dismissAlert()
	        //sendAlertText()

            // syncronous -
            //step -1
            //step -2
            // step-1 sdlfksldfk
            // step-2 
            // step-3 adkjakjds



    })
})