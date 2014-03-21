App = Ember.Application.create({
    currentUser: localStorage.getItem('currentUser')
});

App.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

App.Router.map(function () {
    this.route('about');
    this.route('ask-question');
    this.route('sign-in');

    this.resource('questions', function() {
        this.resource('question', {
            path: '/:question_id'
        });
    });
});
