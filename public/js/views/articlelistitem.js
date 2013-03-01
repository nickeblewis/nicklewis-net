//ArticleListItemView
define(['jquery', 'underscore', 'backbone','text!ArticleListItemViewTpl'], function($, _, Backbone, ArticleListItemViewTpl){

    return Backbone.View.extend({

        template: _.template(ArticleListItemViewTpl),
        
        tagName: "li",

        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });
});
