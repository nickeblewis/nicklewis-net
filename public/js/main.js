// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery.min',
        underscore: 'libs/underscore.min',
        backbone: 'libs/backbone.min',
        bootstrap: 'libs/bootstrap.min'
    }

});

require([

    // Load our app module and pass it to our definition function
    'app'
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});

// TODO: This bit will go in the new app.js and can then be removed
//var AppRouter = Backbone.Router.extend({
//
//    routes: {
//        ""                  : "home",
//        "articles"	: "list",
//        "articles/page/:page"	: "list",
//        "articles/add"         : "addArticle",
//        "articles/:id"         : "articleDetails",
//        "about"             : "about"
//    },
//
//    initialize: function () {
//        this.headerView = new HeaderView();
//        $('.header').html(this.headerView.el);
//    },
//
//    home: function (id) {
//        if (!this.homeView) {
//            this.homeView = new HomeView();
//        }
//        $('#content').html(this.homeView.el);
//        this.headerView.selectMenuItem('home-menu');
//    },
//
//	list: function(page) {
//        var p = page ? parseInt(page, 10) : 1;
//        var articleList = new ArticleCollection();
//        articleList.fetch({success: function(){
//            $("#content").html(new ArticleListView({model: articleList, page: p}).el);
//        }});
//        this.headerView.selectMenuItem('home-menu');
//    },
//
//    articleDetails: function (id) {
//        var article = new Article({_id: id});
//        article.fetch({success: function(){
//            $("#content").html(new ArticleView({model: article}).el);
//        }});
//        this.headerView.selectMenuItem();
//    },
//
//	addArticle: function() {
//        var article = new Article();
//        $('#content').html(new ArticleView({model: article}).el);
//        this.headerView.selectMenuItem('add-menu');
//	},
//
//    about: function () {
//        if (!this.aboutView) {
//            this.aboutView = new AboutView();
//        }
//        $('#content').html(this.aboutView.el);
//        this.headerView.selectMenuItem('about-menu');
//    }
//
//});
//
//utils.loadTemplate(['HomeView', 'HeaderView', 'ArticleView', 'ArticleListItemView', 'AboutView'], function() {
//    app = new AppRouter();
//    Backbone.history.start();
//});