define(['jquery','underscore', 'PortfolioCollection', 'PortfolioListItemView', 'PortfolioListView'], function($, _, PortfolioCollection, PortfolioListItemView, PortfolioListView){
    return function(page){
        var p = page ? parseInt(page, 10) : 1,
            portfolioList = new PortfolioCollection(),
            defer = $.Deferred(),
            renderPromise = defer.then(function(){
                return new PortfolioListView({model: portfolioList, page: p}).el;
            });
        portfolioList.fetch({success: function(){
            defer.resolve();
        }});
        return renderPromise;
    };
});