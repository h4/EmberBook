"use strict";

App.IndexController = Ember.ArrayController.extend({
    siteTitle: 'Welcome to EmberOverflow',
    currentTime: function () {
        return (new Date);
    }.property()
});
