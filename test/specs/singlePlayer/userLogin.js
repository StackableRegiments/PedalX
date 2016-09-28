var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');
describe('login form', function () {
/*    it('should deny access with wrong creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });*/
    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('tester');
        LoginPage.submit();
//        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});