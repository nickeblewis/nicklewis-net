define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    
    return Backbone.Model.extend({

        urlRoot: "/articles",

        idAttribute: "_id",

        initialize: function() {},

        defaults: {
            _id: null,
            name: "",
            year: "",
            summary: "",
            description: "",
            picture: null
        }
    });
});
