"use strict";

App.SetAuthorMixin = Ember.Mixin.create({
    needs: ['application'],
    setAuthor: function(object) {
        this.get('controllers.application.signedInUser').then(function(user) {
            object.set('user', user);
        });
    }
});

App.QuestionsController = Ember.ArrayController.extend({
    siteTitle: 'Welcome to EmberOverflow',
    currentTime: function () {
        return (new Date);
    }.property()
});

App.QuestionController = Ember.ObjectController.extend(App.SetAuthorMixin, {
    isEditing: false,

    canEditQuestion: function() {
        return this.get('author.id') == App.currentUser;
    }.property('model'),

    actions: {
        toggleEditQuestion: function() {
            this.toggleProperty('isEditing');
        },

        submitEdits: function() {
            this.toggleProperty('isEditing');
            this.get('model').save();
        },

        answerQuestion: function() {
            var controller = this;
            var answer = this.store.createRecord('answer', {
                answer: this.get('answer'),
                question: this.get('model'),
                date: new Date()
            });

            this.setAuthor(answer);

            answer.save().then(function(answer) {
                controller.get('model.answers').addObject(answer);
                controller.setProperties({
                    answer: ''
                });
            });
        }
    }
});

App.AskQuestionController = Ember.ArrayController.extend(App.SetAuthorMixin, {
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

            this.setAuthor(question);

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
