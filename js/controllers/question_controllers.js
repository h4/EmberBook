"use strict";

App.QuestionController = Ember.ObjectController.extend({
    needs: ['application'],
    actions: {
        answerQuestion: function() {
            var controller = this;
            var answer = this.store.createRecord('answer', {
                answer: this.get('answer'),
                question: this.get('model'),
                date: new Date()
            });

            this.get('controllers.application.signedInUser').then(function(user) {
                answer.set('user', user);
            });

            answer.save().then(function(answer) {
                controller.get('model.answers').addObject(answer);
                controller.setProperties({
                    answer: ''
                });
            });
        }
    }
});

App.AskQuestionController = Ember.ArrayController.extend({
    needs: ['application'],
    sortProperties: ['date'],
    sortAscending: false,
    latestQuestions: function() {
        return this.slice(0,3)
    }.property('@each'),
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
            });

            controller.transitionToRoute('question', question);
        }
    }
});
