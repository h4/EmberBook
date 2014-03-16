"use strict";

App.Question = DS.Model.extend({
    title: DS.attr('string'),
    question: DS.attr('string'),
    data: DS.attr('date'),
    author: DS.attr('string')
});
