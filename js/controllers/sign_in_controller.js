"use strict";

App.SignInController = Ember.Controller.extend({
    needs: ['application'],
    actions: {
        signIn: function() {
            var email = this.get('email');
            var userToLogin = App.User.FIXTURES.findBy('email', email);

            localStorage.setItem('currentUser', userToLogin.id);
            App.set('currentUser', userToLogin.id);
        }
    }
});
