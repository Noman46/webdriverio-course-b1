//import { $ } from '@wdio/globals'

class LetcodeLoginPage{

    //geting the web elements

    get userEmailField(){
        return $("//input[@name='email']")
    }

    get userPasswordField(){
        return $("//input[@placeholder='Enter password']")
    }

    get loginButton(){
        return $("//button[normalize-space()='LOGIN']")
    }


    // actions on elements

    async typeUserEmail(email){
        (await this.userEmailField).setValue(email)
    }

    async typeUserPassword(password){
        (await this.userPasswordField).setValue(password)
    }

    async clickOnLoginButton(){
        (await this.loginButton).click()
    }

    // async goToLoginPage(){
    //     await browser.url("https://letcode.in/signin")
    // }

    async loginLetCode(email, password){
        await this.typeUserEmail(email)
        await this.typeUserPassword(password)
        await this.clickOnLoginButton()
    }

}

export default new LetcodeLoginPage()