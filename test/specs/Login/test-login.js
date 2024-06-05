import LoginPageForPlayAutomation from '../pageobjects/login.page.test.js';


describe('Login page Test', () => {
   
    it("should login with valid credentials", async ()=>{
        await browser.url("https://play1.automationcamp.ir/login.html")
        await LoginPageForPlayAutomation.loginPlayAution("admin","admin")
        // const otpMessage = "You Otp is 45673 and it will expire within 5 minutes"
        // const birthMsg = "You bitthday is 7/32, cobkjdfbhkj"
        // const url = "https://play1.automationcamp.ir/login.html"
        // console.log(url.includes("https://play1.automationcamp.ir"))


    
    })

    // it("should not login with invalid credentials",async ()=>{
    //     await LoginPageForPlayAutomation.loginPlayAution("admdfasdfasin","asdasdasdasd")
    // })

    // it("should not login with valid right username but wrong password",async ()=>{
    //     await LoginPageForPlayAutomation.loginPlayAution("admin","andkasldkasl")
    // })

    // it("should not login with valid wrong username but right password",async ()=>{
    //     await LoginPageForPlayAutomation.loginPlayAution("adadasd","admin")
    // })
    // it("should not login with valid empy username but right empty",async ()=>{
    //     await LoginPageForPlayAutomation.loginPlayAution("","")
    // })
})