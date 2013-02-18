// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',

    // NOTE: Is it necessary to specify all of these? Will 'views/' work or something like that?
    'views/HeaderView',
    'views/HomeView',
    'views/AboutView',
    'views/ArticleView',
    'views/ArticleDetailView',
    'collections/articles'
    
], function($, _, Backbone, HeaderView, HomeView, AboutView, ArticleView, ArticleDetailView, Articles){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "home",
            "articles" : "articles",
            "articles/page/:page" : "list",
            "articles/add" : "addArticle",
            "articles/:id" : "articleDetails",
            "about" : "about",

            // Default
            "*actions": "defaultRoute"
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;

        var headerView = new HeaderView();
        headerView.render();

        app_router.on('route:home', function(actions){
            var homeView = new HomeView();
            homeView.render();
        });

        app_router.on('route:articles', function(page){
            var articleView = new ArticleView();
            articleView.render();
//            var p = page ? parseInt(page, 10) : 1;
//            var articleList = new Articles();
//            articleList.fetch({success: function(){
//                $("#content").html(new ArticleListView({model: articleList, page: p}).el);
//            }});
//            this.headerView.selectMenuItem('home-menu');
//            var articlelistView = new ListView();
//            listView.render();
        });

        app_router.on('route:articleDetails', function(id) {
            var articledetailView = new ArticleDetailView();
            articledetailView.render(id);
        });

        app_router.on('route:about', function(){
            var aboutView = new AboutView();
            aboutView.render();
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
