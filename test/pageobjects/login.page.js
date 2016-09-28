var Page = require('./page.js')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#username'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
    } },
    submit: { value: function() {
        this.form.submitForm();
    } }
});
module.exports = LoginPage

/*
module.exports = {
  url: '',
  elements: {
    username: 'input[id=username]',
    submit: 'input[type-submit]'
  }
}*/
