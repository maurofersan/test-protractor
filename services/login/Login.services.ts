import {browser} from "protractor";

export class LoginServices {

    public static login() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

}
