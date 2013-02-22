// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',

    // NOTE: Is it necessary to specify all of these? Will 'views/' work or something like that?
    'views/HeaderView',
    'views/HomeView',
    'views/AboutView',
    'views/ArticleListView',
    'views/ArticleDetailView',
    'views/block1',
    'collections/articles'

], function($, _, Backbone, HeaderView, HomeView, AboutView, ArticleListView, ArticleDetailView, Block1View, Articles){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "home",
            "articles" : "articles",
            "articles/page/:page" : "list",
            "articles/add" : "addArticle",
            "articles/:id" : "articleDetails",
            "about" : "about",

            // Default
            "*actions": "default"
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;

        var headerView = new HeaderView();
        headerView.render();

        app_router.on('route:default', function() {
            var homeView = new HomeView();
            homeView.render();
        });
        
        app_router.on('route:home', function(actions){
            // The "Home" page shows both the homeView that I am going to perhaps rename as IntroView?
            var homeView = new HomeView();
            homeView.render();

            // ...and then the list of top articles using an ArticleListView
            //var articleListView = new ArticleListView();
            //articleListView.render();

            // var block1View = new Block1View();
            // block1View.render();
        });

        app_router.on('route:articles', function(page){
            var articleListView = new ArticleListView();
            articleListView.render();
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

        // TODO: Add routes for 
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
