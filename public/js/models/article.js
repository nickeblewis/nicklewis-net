define(['underscore', 'backbone'], function(_, Backbone) {
    var Article = Backbone.Model.extend({
        urlRoot: "/articles",
        idAttribute: "_id",

        initialize: function () {},

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

    return Article;
});
