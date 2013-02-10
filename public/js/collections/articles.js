define(['underscore', 'backbone', 'models/article'],
    function(_, Backbone, ArticleModel) {
    var Articles = Backbone.Collection.extend({
        model: ArticleModel,
        url: "/articles"
    });
     return Articles;
});