import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
    get btnSubmitCssSelector() {
        return $('button[class="radius"]');
    }
    get btnSubmitByXpath() {
        return $('//button/i[contains(text()," Login")]')
    }
   
    get btnSubmitByXpath_2() {
        return $('//button[@class="radius"]')
    }
    get btnSubmitByXpath_3() {
        return $('//button/i[text()=" Login"]')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await browser.pause(2000)
        await this.inputPassword.setValue(password);
        await browser.pause(2000)
        await this.btnSubmitCssSelector.click();
        await browser.pause(2000)
    }


    open() {
        return super.open('login');
    }
}

export default new LoginPage();
