



class LoginPageForPlayAutomation {

// properties/elements

     get usernameField () {
        return  $("input[placeholder='Username']")
     }
     get passwordField () {
        return  $("input[placeholder='Password']")
     }
     get loginButton () {
        return  $("#login")
     }



// behavior / action
    async typeOnUserNameField (username) {
        (await this.usernameField).setValue(username)
        await browser.pause(1500)
    }

    async typeOnPasswordField (password) {
        (await this.passwordField).setValue(password)
    }

    async clickOnLoginButton () {
        (await this.loginButton).click()
    }

    async gotoLoginPage () {
        await browser.url("https://play1.automationcamp.ir/login.html")
    }



    async loginPlayAution (username,password) {
        await this.typeOnUserNameField(username)
        await browser.pause(3000)
        await this.typeOnPasswordField(password)
        await browser.pause(3000)
        await this.clickOnLoginButton()
        await browser.pause(3000)
    }



}

export default new LoginPageForPlayAutomation();
