import Utility from '../utility.js'
import fs from 'fs';
import path from 'path';
import allureReporter from '@wdio/allure-reporter';
describe('Practising All the Necessary Defult WDIO assertion', () => {

    it("Should login and verify login successfull", async () => {
        await browser.url('https://play1.automationcamp.ir/login.html')
        const userName = await $('#user')
        await userName.setValue("admin")
        const password = await $('#password')
        await password.setValue("admin")
        const loginButton = await $('#login')
        await loginButton.click()
        await expect(browser).toHaveUrl("https://play1.automationcamp.ir/order_submit.html")
        await expect(browser).toHaveTitle('Order Pizza')
    })

    it("Should display the login button", async () => {
        await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
        const triggerButton = await $('#visibility_trigger')
        const clickMeButton = await $('#visibility_target')

        await triggerButton.click()
        await expect(clickMeButton).toBeDisplayed()
        await expect(clickMeButton).toBeClickable()
    })

    it("Verifying value inside input field", async () => {
        await browser.url('https://play1.automationcamp.ir/expected_conditions.html')
        const minimumWaitValue = await $('#min_wait')
        await expect(minimumWaitValue).toHaveValue('2')
    })
    it("It should failed", async () => {
        allureReporter.addLabel('feature', 'Signup');
        allureReporter.addTag('fixme');
        await expect(2).toBeGreaterThan(5)
    })
    it("It should failed agin", async () => {
        allureReporter.addLabel('feature', 'Signup');
       
        await expect(5).toBeGreaterThan(7)
    })
    // it.only('Get Single Post', async function () {
    //     const singlePost = "https://api.testmail.app/api/json?apikey=b251e48e-4517-44f8-851d-ace9eda8d054&namespace=riae9&pretty=true"
    //     try{
    //         const response = await fetch(singlePost)
    //         const posts = await response.json()
    //         console.log("response is ", posts.emails[0].text)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // })

    const loginCredentials = [
        {
          username: "standard_user",
          password: "secret_sauce",
          message: "success"
        },
        {
          username: "locked_out_user",
          password: "secret_sauce",
          message: "Epic sadface: Sorry, this user has been locked out."
        },
        {
          username: "unknown",
          password: "secret_sauce",
          message: "Epic sadface: Sorry, this user has been locked out."
        }
      ];

      for (const loginCredential of loginCredentials) {
        it(`testing with ${loginCredential.username}`, async () => {
            console.log(loginCredential.message)
        })
    }

})