// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/home'
], function($, _, Backbone, Session, HomeView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            ""                  : "home",
            "articles"	: "list",
            "articles/page/:page"	: "list",
            "articles/add"         : "addArticle",
            "articles/:id"         : "articleDetails",
            "about"             : "about"
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;
        app_router.on('home', function(){
//            if (!this.homeView) {
//                this.homeView = new HomeView();
//            }
//            $('#content').html(this.homeView.el);
//            this.headerView.selectMenuItem('home-menu');

            var homeView = new HomeView();
            homeView.render();
        });
//        app_router.on('list', function(){
//            var p = page ? parseInt(page, 10) : 1;
//            var articleList = new ArticleCollection();
//            articleList.fetch({success: function(){
//                $("#content").html(new ArticleListView({model: articleList, page: p}).el);
//            }});
//            this.headerView.selectMenuItem('home-menu');
//        });
//        app_router.on('about', function(){
//            if (!this.aboutView) {
//                this.aboutView = new AboutView();
//            }
//            $('#content').html(this.aboutView.el);
//            this.headerView.selectMenuItem('about-menu');
//        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});