"use strict";

App.User = DS.Model.extend({
    fullName: DS.attr('string'),
    email: DS.attr('string'),
    questions: DS.hasMany('question', {
        async: true
    })
});
