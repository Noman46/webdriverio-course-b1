describe('Practising All the Necessary Defult WDIO assertion', () => {

    // it("Should login and verify login successfull", async () => {
    //     await browser.url('https://play1.automationcamp.ir/login.html')
    //     await browser.pause(2000)
    //     const userName = await $('#user')
    //     await userName.setValue("admin")
    //     const password = await $('#password')
    //     await password.setValue("admin")
    //     const loginButton = await $('#login')
    //     await loginButton.click()
    //     //await expect(browser).toHaveUrl("https://play1.automationcamp.ir/order_submit.html")
    //     // await expect(browser).toHaveTitle('Order Pizza')
    // })

    // it("Should display the login button", async () => {
    //     await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
    //     await browser.pause(1000)
    //     const triggerButton = await $('#visibility_trigger')
    //     const clickMeButton = await $('#visibility_target')
        
    //     await triggerButton.click()
    //     await expect(clickMeButton).toBeDisplayed()
    //     await expect(clickMeButton).toBeClickable()
    // })

    it("Verifying to be focused or not", async () => {
        await browser.url('https://play1.automationcamp.ir/login.html')
        await browser.pause(2000)
        const userName = await $('#user')
        await expect(userName).toBeFocused()
        await expect(userName).toHaveAttribute('placeholder','Usernamee')
    })
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

    it("Verifying Element is in view port", async () => {
        const errorMessage = "I did not scroll to that element that is why the button din not get in the view"
        await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
        //await browser.pause(5000)
        const disableButton = await $('#enabled_target')
        let dynamic = 5
        const displayedNumber = (await $('#adakj')).getText()
        await disableButton.scrollIntoView()
        await browser.pause(2000)
        await expect(disableButton).toBeDisplayedInViewport({message :`After cal the value is ${dynamic} but displayed ${displayedNumber}`})
    })




})