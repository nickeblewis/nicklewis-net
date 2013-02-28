// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',

    // NOTE: Is it necessary to specify all of these? Will 'views/' work or something like that?
    'views/HeaderView',
    'views/BannerView',
    'views/HomeView',
    'views/AboutView',
    'views/ArticleListView',
    'views/ResumeView',
    'views/ResumeEditView',
    'views/ArticleDetailView',    
    'views/PhotoView',    
    'collections/articles'

], function($, _, Backbone, HeaderView, BannerView, HomeView, AboutView, ArticleListView, ResumeView, ResumeEditView, ArticleDetailView, PhotoView, Articles){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "index" : "home",
            "articles" : "articles",
            "resume" : "resume",
            "resume/edit/:role" : "resumeEdit",
            "photos" : "photos",
            "articles/page/:page" : "list",
            "articles/add" : "addArticle",
            "articles/:id" : "articleDetails",
            "about" : "about",

            // Default
            "*actions": "home"
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;

        var headerView = new HeaderView();
        headerView.render();

        var bannerView = new BannerView();
        bannerView.render();

        // TODO: At some point we'd instantiate a footer view here too

        app_router.on('route:home', function(actions){
            // The "Home" page shows both the homeView that I am going to perhaps rename as IntroView?
            var homeView = new HomeView();
            homeView.render();
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

        app_router.on('route:resume', function(){
            var resumeView = new ResumeView();
            resumeView.render();
        });

        app_router.on('route:resumeEdit', function(role){
            var resumeEditView = new ResumeEditView();
            resumeEditView.render();
        });

        app_router.on('route:photos', function(page){
            var photoView = new PhotoView();
            photoView.render();
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
