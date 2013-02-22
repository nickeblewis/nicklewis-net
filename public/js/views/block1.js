define([
    'jquery',
    'underscore',
    'backbone',
    'collections/articles'
], function($, _, Backbone, articleListTemplate, Articles) {
    var Block1View = Backbone.View.extend({
        tagName: 'li',

        template: '<%= name %>',

        el: $("#block1"),

        render: function () {
            var that = this;
            var articles = new Articles();
            articles.fetch({
                success: function(articles) {
                    $(that.el).html(_.template(this.template, {articles: articles.models, _:_}));
                }
            });
        }
    });

    return Block1View;
});