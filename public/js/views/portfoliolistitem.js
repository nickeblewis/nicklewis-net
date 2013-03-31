//ArticleListItemView
define(['jquery', 'underscore', 'backbone','text!PortfolioListItemViewTpl','isotope'],
    function($, _, Backbone, PortfolioListItemViewTpl, isotope){

    return Backbone.View.extend({

        template: _.template(PortfolioListItemViewTpl),

        className: 'element',
        
        // tagName: "div",

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
