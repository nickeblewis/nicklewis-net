define(['jquery','underscore', 'backbone'], function($, _, Backbone) {

    return Backbone.Model.extend({
        
        urlRoot: "/roles",
        
        idAttribute: "_id",

        initialize: function () {
           this.validators = {};

            this.validators.title = function (value) {
                return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a title"};
            }; 
        },

        validateItem: function (key) {
            return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
        },

        validateAll: function () {

            var messages = {};

            for (var key in this.validators) {
                if(this.validators.hasOwnProperty(key)) {
                    var check = this.validators[key](this.get(key));
                    if (check.isValid === false) {
                        messages[key] = check.message;
                    }
                }
            }

            return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
        },

        defaults: {
            _id: null,
            title: "job title",
            location: "Location",
            order: 99,
            description: "description goes here",
            points: [],
            skills: ["HTML","CSS"],
            startdate: "start date",
            enddate: "date finished"
        }
    });
});
