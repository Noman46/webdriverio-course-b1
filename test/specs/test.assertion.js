import Utility from '../utility.js'
import fs from 'fs';
import path from 'path';
describe('Practising All the Necessary Defult WDIO assertion', () => {

    it("Should login and verify login successfull", async () => {
        const filePath = path.resolve('data', 'userList.json');
        const rawdata = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(rawdata);

        console.log(users); // This will output the array of users

        // await browser.url('https://play1.automationcamp.ir/login.html')
        // await browser.pause(2000)
        // const userName = await $('#user')
        // await userName.setValue("admin")
        // const password = await $('#password')
        // await password.setValue("admin")
        // const loginButton = await $('#login')
        // await loginButton.click()
        // //await expect(browser).toHaveUrl("https://play1.automationcamp.ir/order_submit.html")
        // // await expect(browser).toHaveTitle('Order Pizza')
    })

    // it("Should display the login button", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(1000)
    //     const triggerButton = await $('#visibility_trigger')
    //     const clickMeButton = await $('#visibility_target')

    //     await triggerButton.click()
    //     await expect(clickMeButton).toBeDisplayed()
    //     await expect(clickMeButton).toBeClickable()
    // })

    // it("Verifying to be focused or not", async () => {
    //     await browser.url('https://play1.automationcamp.ir/login.html')
    //     await browser.pause(2000)
    //     const userName = await $('#user')
    //     await expect(userName).toBeFocused()
    //     await expect(userName).toHaveAttribute('placeholder','Usernamee')
    // })
    // it("Verifying value inside input field", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(1000)
    //     const minimumWaitValue = await $('#min_wait')
    //     await expect(minimumWaitValue).toHaveValue('2')
    // })

    // it("Verifying button is disable", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     await browser.pause(5000)
    //     await expect(disableButton).toBeEnabled()
    // })

    // it("Verifying radio button is selected or not", async () => {
    //     await browser.url('https://play1.automationcamp.ir/login.html')
    //     await browser.pause(2000)
    //     const userName = await $('#user')
    //     await userName.setValue("admin")
    //     const password = await $('#password')
    //     await password.setValue("admin")
    //     const loginButton = await $('#login')
    //     await loginButton.click()
    //     await browser.pause(3000)
    //     const midiumPizzaRadioButton = await $('#rad_medium')
    //     await expect(midiumPizzaRadioButton).toBeSelected()

    //     // const largePizzaRadioButton = await $('#rad_large')
    //     // await expect(largePizzaRadioButton).toBeSelected()
    // })


    // it("Verifying an element has expected text", async () => {
    //     await browser.url('https://play1.automationcamp.ir/login.html')
    //     await browser.pause(2000)
    //     const userName = await $('#user')
    //     await userName.setValue("admin")
    //     const password = await $('#password')
    //     await password.setValue("admin")
    //     const loginButton = await $('#login')
    //     await loginButton.click()
    //     await browser.pause(1000)
    //     const addToCartButton = await $('#submit_button')
    //     await expect(addToCartButton).toHaveText('Add to Cart')
    // })

    // it("Verifying Element is in view port", async () => {
    //     const errorMessage = "I did not scroll to that element that is why the button din not get in the view"
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     //await browser.pause(5000)
    //     const disableButton = await $('#enabled_target')
    //     let dynamic = 5
    //     const displayedNumber = (await $('#adakj')).getText()
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await expect(disableButton).toBeDisplayedInViewport({message :`After cal the value is ${dynamic} but displayed ${displayedNumber}`})
    // })




    // it("Practicing String Option for Element Matcher Assertion", async () => {

    //     await browser.url('https://letcode.in/test')
    //     //await browser.pause(5000)
    //     const firstHeaderElement = await $('//header/p[1]')


    //     await expect(firstHeaderElement).toHaveText('In',{atEnd:true})
    // })
    it.skip("Practicing Number Option for Element Matcher Assertion", async () => {
        // await browser.url('https://letcode.in/test')
        //await browser.pause(5000)
        // const firstHeaderElement = await $$('//header/p')   
        // await expect(firstHeaderElement).toBeElementsArrayOfSize({lte: 10})
        console.log("================== First one")
    })
    it("Practicing Number Option for Element Matcher Assertion", async () => {
        // await browser.url('https://letcode.in/test')
        // //await browser.pause(5000)
        // const firstHeaderElement = await $$('//header/p')   
        // await expect(firstHeaderElement).toBeElementsArrayOfSize({lte: 10})
        console.log("================== 2nd one one")
    })


    // it("Understanding Wait", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     await expect(disableButton).toBeEnabled({wait:1000,message:"Did not enabled within 1 seconds, that is why failed"})
       
    // })

    // it("Understanding Message", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     await expect(disableButton).toBeEnabled({wait:2000 ,message:'Did not get enabled within 2'})
    //     // here the from the test result we did not understand why it failed
    //     // So we can put a message that , this is why it failed
    // })

    // it("Understanding afterAssertion", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     await expect(disableButton).toBeEnabled({wait: 7000, afterAssertion:  Utility.takeScreenShotAsProof})
    // })
    // it("Understanding afterAssertion", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     let name = "Noman"
    //     let birthday ="2/2/2/"
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     function afterMyAssertion () {
    //         console.log("I am after Assertion =============== ")
    //     }
    //     function beforeMyAssertion () {
    //         console.log("I am before Assertion =============== ",name,birthday)
    //     }
    //     await expect(disableButton).toBeEnabled({wait:1000,beforeAssertion:beforeMyAssertion,afterAssertion: afterMyAssertion,message:"Thiajdkjansdkj"})
    // })

    // it("Understanding beforeAssertion", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     function beforeMyAssert(){
    //         console.log("================= I am before the assertion")
    //     }
    //     await expect(disableButton).toBeEnabled({beforeAssertion: beforeMyAssert})
    // })

    // it("Understanding All togather", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(2000)
    //     const disableButton = await $('#enabled_target')
    //     const triggerbutton = await $('#enabled_trigger')
    //     await disableButton.scrollIntoView()
    //     await browser.pause(2000)
    //     await triggerbutton.click()
    //     function beforeMyAssert(){
    //         console.log("================= I am before the assertion")
    //     }
    //     await expect(disableButton).toBeEnabled({ wait: 2000, beforeAssertion: beforeMyAssert, afterAssertion: Utility.takeScreenShotAsProof, message:"Did not pass because this and that" })
    // })





})