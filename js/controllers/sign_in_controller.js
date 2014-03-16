"use strict";

App.SignInController = Ember.Controller.extend({
    actions: {
        signIn: function() {
            var email = this.get('email');
            var userToLogin = App.User.FIXTURES.findBy('email', email);

            localStorage['currentUser'] = userToLogin.id;
        }
    }
});
