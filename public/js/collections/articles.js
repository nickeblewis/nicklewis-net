define(['underscore', 'backbone', 'models/article'], function(_, Backbone, Article) {
    return Backbone.Collection.extend({
        model: Article,
        url: "/articles"
    });
});