define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/articles/articleTemplate.html',
    'collections/articles'
], function($, _, Backbone, articleTemplate, Articles) {
    var ArticleView = Backbone.View.extend({
        el: $("#content"),

        render: function () {
            var that = this;
            var articles = new Articles();
            articles.fetch({
                success: function(articles) {
                    $(that.el).html(_.template(articleTemplate, {articles: articles.models, _:_}));
                }
            });
        }
    });

    return ArticleView;
});

//define([
//    'jquery',
//    'underscore',
//    'backbone',
//    'text!templates/articles/articleTemplate.html',
//    'collections/articles'
//], function($, _, Backbone, articleTemplate, Articles) {
//    var ArticleListItemView = Backbone.View.extend({
//
//        tagName: "li",
//
//        initialize: function () {
//            this.model.bind("change", this.render, this);
//            this.model.bind("destroy", this.close, this);
//        },
//
//        render: function () {
//            $(this.el).html(this.template(this.model.toJSON()));
//            return this;
//        }
//
//    });
//});