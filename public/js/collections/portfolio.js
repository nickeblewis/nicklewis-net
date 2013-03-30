// TODO: Had to change ArticleModel below to models/article throughout the project, will need to change back
define(['underscore', 'backbone', 'models/portfolio'], function(_, Backbone, Portfolio) {
    return Backbone.Collection.extend({
        model: Portfolio,
        url: "/portfolio"
    });
});