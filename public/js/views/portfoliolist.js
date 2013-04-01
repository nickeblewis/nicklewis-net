// ArticleListView
define(['jquery', 'underscore', 'backbone', 'isotope', 'utils', 'PortfolioListItemView', 'paginator','text!PortfolioContainerViewTpl'], function($, _, Backbone, Isotope,  utils, PortfolioListItemView, Paginator,PortfolioContainerViewTpl){

    return Backbone.View.extend({

        template: _.template(PortfolioContainerViewTpl),

        initialize: function () {
            this.render();
        },

        render: function () {
            var portfolio = this.model.models;
            var len = portfolio.length;
            var startPos = (this.options.page - 1) * 50;
            var endPos = Math.min(startPos + 50, len);

            $(this.el).html(this.template());

            for (var i = startPos; i < endPos; i++) {
                $('#photos', this.el).append(new PortfolioListItemView({model: portfolio[i]}).render().el);
            }
            
            var _this = this;
            setTimeout(function() { _this.$el.isotope({ 
                itemSelector: '.element', 
                fitColumn: true
                 
            })},0);

  
            return this;
        }
    });    
});
