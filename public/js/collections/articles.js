// TODO: Had to change ArticleModel below to models/article throughout the project, will need to change back
define(['underscore', 'backbone', 'models/article'], function(_, Backbone, Article) {
    return Backbone.Collection.extend({
        model: Article,
        url: "/articles"
    });
});