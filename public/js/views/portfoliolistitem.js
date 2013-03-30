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

            // $(this.el).isotope(
            //                 {
            //                     itemSelector: '.item',
            //                     resizable: false,
            //                     masonry: { columnWidth: 1 },
            //                     containerStyle: {
            //                         position: 'relative',
            //                         zIndex: 1
            //                     }
            //                 }
            //             );
            return this;
        }
    });
});
