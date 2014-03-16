"use strict";

App.IndexController = Ember.ArrayController.extend({
    siteTitle: 'Welcome to EmberOverflow',
    currentTime: function () {
        return (new Date);
    }.property()
});

App.ApplicationController = Ember.Controller.extend({
    signedInUser: function() {
        return this.store.find('user', localStorage['currentUser']);
    }.property('App.currentUser'),
    userSignedIn: function() {
        return localStorage['currentUser'] != null;
    }.property('App.currentUser'),

    actions: {
        signOut: function() {
            localStorage.removeItem('currentUser');
            App.set('currentUser', undefined);
        }
    }
});
