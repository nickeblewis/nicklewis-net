define(['jquery','underscore', 'ArticlesCollection', 'ArticleListItemView', 'ArticleListView'], function($, _, ArticleCollection, ArticleListItemView, ArticleListView){
    return function(page){
        var p = page ? parseInt(page, 10) : 1,
            articleList = new ArticleCollection(),
            defer = $.Deferred(),
            renderPromise = defer.then(function(){
                return new ArticleListView({model: articleList, page: p}).el;
            });
        articleList.fetch({success: function(){
            defer.resolve();
        }});
        return renderPromise;
    };
});
