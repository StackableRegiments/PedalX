require('../env.js');
var assert = require('assert');

describe('Teacher didactic', function() {
    it('Should permit login', function () {
        browser.url(root+"board");
        assert.equal(browser.getTitle(), "");
    });
});
