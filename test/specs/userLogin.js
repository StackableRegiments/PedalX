module.exports = {
  'Test': function (client) {
    var login = client.page.login();

    login.navigate()
      .assert.visible('@username')
      .setValue('@username', 'tester')
      .click('@submit');

    client.end();
  }
};