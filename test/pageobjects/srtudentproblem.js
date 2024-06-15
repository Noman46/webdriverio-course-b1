import { $ } from '@wdio/globals';
import Page from './page.js';

class Studenproblem{

    get firstnameField() {
        return  $('#firstname')
    }

    get lastnameField() {
        return  $('#lastname');
    }

    
    async fillupPersonalInfo(firstname, lastname) {

        (await this.firstnameField).click()
        (await this.lastnameField).click()

    }


    open() {
        return super.open('login');
    }
}

export default new Studenproblem();
