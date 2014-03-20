"use strict";

App.AskQuestionController = Ember.ArrayController.extend({
    needs: ['application'],
    actions: {
        askQuestion: function() {
            var controller = this;
            var question = this.store.createRecord('question', {
                title: this.get('title'),
                question: this.get('question'),
                date: new Date()
            });

            this.get('controllers.application.signedInUser').then(function(user) {
                question.set('author', user);
            });

            question.save().then(function(question) {
                controller.setProperties({
                    title: "",
                    question: ""
                })
            })
        }
    }
});
