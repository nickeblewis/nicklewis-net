define(['underscore', 'backbone'], function(_, Backbone) {
    var Article = Backbone.Model.extend({

        urlRoot: "/articles",
    
        idAttribute: "_id",
    
        initialize: function () {

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
//    var ArticleCollection = Backbone.Collection.extend({
//        model: Article,
//        url: "/articles"
//    });
    
    return Article;
});
