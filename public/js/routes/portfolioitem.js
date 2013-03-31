// TODO: Had to change ArticleModel below to models/portfolio throughout the project, will need to change back
define(['jquery', 'underscore', 'models/portfolio', 'PortfolioView'], function($, _, Portfolio, PortfolioView){
    return {
        initView: function(id){
            var portfolio = new Portfolio({_id: id}),
                defer = $.Deferred(),
                renderPromise = defer.then(function(){
                    return new PortfolioView({model: portfolio}).el;
                });
            portfolio.fetch({success: function(){
                defer.resolve();
            }});
            return renderPromise;
        },
        initAdd: function(){
            return new PortfolioView({model: new Portfolio()}).el;
        }
    }
});