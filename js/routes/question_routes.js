"use strict";

App.QuestionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('question');
    }
});

App.AskQuestionRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('question');
    }
});
