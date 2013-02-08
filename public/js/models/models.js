define([
    'underscore',
    'backbone',
    ], function(_, Backbone( {
    var ArticleModel = Backbone.Model.extend({

        urlRoot: "/articles",
    
        idAttribute: "_id",
    
        initialize: function () {
            this.validators = {};
    
            // TODO: These validations will need to change
            this.validators.name = function (value) {
                return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a name"};
            };
    
            this.validators.grapes = function (value) {
                return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a grape variety"};
            };
    
            this.validators.country = function (value) {
                return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a country"};
            };
        },
    
        validateItem: function (key) {
            return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
        },
    
        // TODO: Implement Backbone's standard validate() method instead.
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
            name: "",
            grapes: "",
            country: "USA",
            region: "California",
            year: "",
            description: "",
            picture: null
        }
    });

    // TODO: Cut this out to new collections folder, see https://github.com/thomasdavis/backbonetutorials/blob/gh-pages/examples/modular-backbone/js/collections/projects/ProjectsCollection.js
    
    var ArticleCollection = Backbone.Collection.extend({
    
        model: Article,
    
        url: "/articles"
    
    });
    
    return ArticleModel;
});
