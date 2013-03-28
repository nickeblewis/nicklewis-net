// TODO: Had to change ArticleModel below to models/article throughout the project, will need to change back
define(['jquery', 'underscore', 'models/article', 'ArticleView'], function($, _, Article, ArticleView){
    return {
        initView: function(id){
            var article = new Article({_id: id}),
                defer = $.Deferred(),
                renderPromise = defer.then(function(){
                    return new ArticleView({model: article}).el;
                });
            article.fetch({success: function(){
                defer.resolve();
            }});
            return renderPromise;
        },
        initAdd: function(){
            return new ArticleView({model: new Article()}).el;
        }
    }
});