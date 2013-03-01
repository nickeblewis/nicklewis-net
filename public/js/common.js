require.config({
    paths: {
        'jquery': 'lib/jquery-min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': 'lib/bootstrap-min',
        'text': 'lib/text',
        'utils': 'utils',
        'HeaderView' : 'views/header',
        'BannerView' : 'views/banner',
        'HomeView' : 'views/home',
        'HomeViewTpl' : '../templates/home/homeTemplate.html',
        'HeaderViewTpl' : '../templates/layout/headerTemplate.html',
        'BannerViewTpl' : '../templates/layout/bannerTemplate.html',

        'AboutView' : 'views/AboutView',
        'ArticleListView' : 'views/ArticleListView',
        'ResumeView' : 'views/ResumeView',
        'ResumeEditView' : 'views/ResumeEditView',
        'ArticleDetailView' : 'views/ArticleDetailView',   
        'PhotoView' : 'views/PhotoView',    
        'ArticleModel': 'models/article',
        'ArticleCollection' : 'collections/articles'

        //'paginator': 'views/paginator',
        //'WineModel': 'models/wine',
        //'WinesCollection': 'collections/wines',
        //'WineView': 'views/winedetails',
        //'WineViewTpl': '../tpl/WineView.html',
        //'WineListView': 'views/winelist',
        //'WineListItemView': 'views/winelistitem',
        //'WineListItemViewTpl': '../tpl/WineListItemView.html',
        //'HomeView': 'views/home',
        //'HomeViewTpl': '../tpl/HomeView.html',
        //'AboutView': 'views/about',
        //'AboutViewTpl': '../tpl/AboutView.html'
    },
    shim: {
        'jquery': {
            exports: "$"
        },
        'underscore': {
            exports: "_"
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'approuter', 'bootstrap'], function($, _, Backbone, AppRouter){
    $(function(){
        window.app = new AppRouter();
        Backbone.history.start();
    });
});
