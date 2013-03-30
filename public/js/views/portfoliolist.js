// ArticleListView
define(['jquery', 'underscore', 'backbone', 'isotope', 'utils', 'PortfolioListItemView', 'paginator'], function($, _, Backbone, Isotope, utils, PortfolioListItemView, Paginator){

    return Backbone.View.extend({

        initialize: function () {
            this.render();
            
        },

        render: function () {
            var portfolio = this.model.models;
            var len = portfolio.length;
            var startPos = (this.options.page - 1) * 50;
            var endPos = Math.min(startPos + 50, len);

           
            $(this.el).html('<div id="photos"></div>');

            for (var i = startPos; i < endPos; i++) {  

                $('#photos', this.el).append(new PortfolioListItemView({model: portfolio[i]}).render().el);
            }

            // $(this.el).append(new Paginator({model: this.model, page: this.options.page}).render().el);


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

            var _this = this;
            setTimeout(function() { _this.$el.isotope({ itemSelector: '.element',

            })},0);
            return this;
        }
    });    
});
