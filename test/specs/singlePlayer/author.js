var assert = require('assert');
var root = "https://d2l-metl-test.stackableregiments.com/";
describe('Teacher didactic', function() {
    it('Should permit login', function () {
        browser.url(root+"board");
        assert.equal(browser.getTitle(), "");
    });
});
