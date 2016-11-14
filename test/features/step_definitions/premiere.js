var myStepDefinitionsWrapper = function () {

    var Browser = require("zombie");
    var brow;

    this.Given(/^la connexion est valide$/, function (callback) {
        brow = new Browser();
        callback();
    });

    this.When(/^j'accède à la page d'accueil$/, function (callback) {
        brow.visit("http://localhost:3000", function (err) {
            if(err)
                throw err;

            brow.assert.success();
            callback();
        });
    });

    this.Then(/^je vois la liste des contacts$/, function (callback) {
        brow.assert.text('title','Contacts');
        callback();
    });
};
module.exports = myStepDefinitionsWrapper;