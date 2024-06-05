import { Key } from 'webdriverio'
describe("Lets get used to", () => {


     // Spriha problem soved ===========================================
    // it("Window Practise", async () => {


    //    

    //     await browser.url('https://www.selenium.dev/selenium/web/alerts.html#')
    //     await browser.pause(1000);
    //     // const linkForTheNewTab = await $('#open-window-with-onload-alert')
    //     // await linkForTheNewTab.scrollIntoView()
    //     // await linkForTheNewTab.click()
    //     // await browser.pause(2000);

    //     const totalTabs = "67C952B04ED60282692753965937E0"
    //     console.log("Total tabs", totalTabs.length)
    //     console.log("tabs ================= ", totalTabs)

    //     // await browser.switchToWindow(totalTabs[1])
    //     // await browser.pause(3000);
    //     // const currentTabUrl = await browser.getUrl()
    //     // console.log("Current Url == ",currentTabUrl)
    //     // await browser.closeWindow()
    //     // await browser.pause(2000);
    //     // await browser.switchToWindow(totalTabs[0])
    //     // const currentTabUrlMother = await browser.getUrl()
    //     // console.log("Current mother Url == ",currentTabUrlMother)
    //     // await browser.pause(3000);


    //     // get the new tab url
    //     // close the new tab
    //     // get back to the mother tab / window.   
    // })

    // it("Alert practoise", async () =>{
    //     // alert == warning / guide message/ error
    //     // alert yes/ no question/ accept, cancel
    //     // pompt text filed "jdsfkjaksdj" 
    //     // 
    //     await browser.url('https://demoqa.com/alerts')
    //     await browser.pause(3000)
    //     const normalAlert = await $('#confirmButton')
    //     await normalAlert.click()
    //     await browser.pause(3000)
    //     const alertText = await browser.getAlertText()
    //     console.log("Alert text ====================== ", alertText)
    //     await browser.acceptAlert()
    //     await browser.pause(3000)
    //     await normalAlert.click()
    //     await browser.pause(2000)
    //     await browser.dismissAlert()
    //     await browser.pause(2000)
    //     await browser.sendAlertText()

    //          //isAlertOpen(): 
    //         // getAlertText()
    //         //acceptAlert()
    //         //dismissAlert()
    //         //sendAlertText()

    //         // syncronous -
    //         //step -1
    //         //step -2
    //         // step-1 sdlfksldfk
    //         // step-2 
    //         // step-3 adkjakjds



    // })

    it("Window Practise 2", async () => {

        await browser.url('https://www.selenium.dev/selenium/web/alerts.html#')
        await browser.pause(2000);
        const linkForTheNewTab = await $('#open-page-with-onload-alert')
        await linkForTheNewTab.scrollIntoView()
        // await browser.pause(2000);
        const xValue = parseInt(await linkForTheNewTab.getLocation('x'))
        const yValue = parseInt(await linkForTheNewTab.getLocation('y'))
        console.log("X location ", xValue)
        console.log("Y location ", yValue)
        await browser.pause(1000);

        await browser.action('key')
        .down(Key.Ctrl)
        .perform()
        await linkForTheNewTab.click();
        // await browser.action('pointer')
        // .move({ duration: 0, linkForTheNewTab, x: 380, y: 315 })
        // .down({ button: 0 }) // left button
        // .pause(10)
        // .up({ button: 0 })
        // .perform()
       




        await browser.pause(100);



    })
})