// Filename: router.js
define([
    'jquery', 'underscore', 'backbone'], function($, _, Backbone){
    return Backbone.Router.extend({
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
        },

        

        setContent: function(htmlContent) {
            $('#contentmain').html(htmlContent);
        },

        selectMenuItem: function(menuItem) {
            this.$navItems.removeClass('active');
            if (menuItem) {
                this.$navItems.filter('.' + menuItem).addClass('active');
            }    
        },

        initialize: function() {

            this.$navItems = $('.nav').find('li');
            
        },

        home: function(id) {
            var self = this;
            require(['routes/home'], function(htmlContent){
                self.setContent(htmlContent);
            });
        },

        articles: function() {
            var self = this;
            require(['routes/articles'], function(htmlContent){
                self.setContent(htmlContent);
            });
        },

        resume: function() {
            var self = this;
            require(['routes/resume'], function(htmlContent){
                self.setContent(htmlContent);
            });
        }

        // resumeEdit: function() {},
        // photos: function() {},
        // list: function() {},
        // addArticle: function() {},
        // articleDetails: function() {},
        // about: function() {}
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
