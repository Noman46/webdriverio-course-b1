import LoginPageForPlayAutomation from '../pageobjects/login.page.test.js';


describe('Login page Test', () => {
   
    it("should login with valid credentials", async ()=>{
        await browser.url("https://play1.automationcamp.ir/login.html")
        await LoginPageForPlayAutomation.loginPlayAution("admin","admin")
    })

    // it("should not login with invalid credentials",async ()=>{
    //     await browser.url("https://play1.automationcamp.ir/login.html")
    //     await LoginPageForPlayAutomation.loginPlayAution("admdfasdfasin","asdasdasdasd")
    // })

    // it("should not login with valid right username but wrong password",async ()=>{
    //     await browser.url("https://play1.automationcamp.ir/login.html")
    //     await LoginPageForPlayAutomation.loginPlayAution("admin","andkasldkasl")
    // })

    // it("should not login with valid wrong username but right password",async ()=>{
    //     await browser.url("https://play1.automationcamp.ir/login.html")
    //     await LoginPageForPlayAutomation.loginPlayAution("adadasd","admin")
    // })
    // it("should not login with valid empty username but right empty",async ()=>{
    //     await browser.url("https://play1.automationcamp.ir/login.html")
    //     await LoginPageForPlayAutomation.loginPlayAution("","")
    // })
})