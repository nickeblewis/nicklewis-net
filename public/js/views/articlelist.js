// ArticleListView
define(['jquery', 'underscore', 'backbone', 'ArticleListItemView', 'paginator'], function($, _, Backbone, ArticleListItemView, Paginator){

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            var articles = this.model.models;
            var len = articles.length;
            var startPos = (this.options.page - 1) * 8;
            var endPos = Math.min(startPos + 8, len);

            $(this.el).html('<ul class="thumbnails"></ul>');

            for (var i = startPos; i < endPos; i++) {
                console.log(articles[i]);
                //$('.thumbnails', this.el).append(new ArticleListItemView({model: articles[i]}).render().el);
            }

            $(this.el).append(new Paginator({model: this.model, page: this.options.page}).render().el);

            return this;
        }
    });
    
});
