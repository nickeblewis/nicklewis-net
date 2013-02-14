define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/articles/articledetailTemplate.html',
    'models/article'
], function($, _, Backbone, articledetailTemplate, Article) {
    var ArticleDetailView = Backbone.View.extend({
        el: $("#content"),

        render: function (id) {
            var that = this;
            var article = new Article({_id: id});
            article.fetch({
                success: function() {
                    $(that.el).html(_.template(articledetailTemplate, article.attributes));
                }
            });
        }
    });

    return ArticleDetailView;
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