require.config({
    paths: {
        'jquery': 'lib/jquery-min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': 'lib/bootstrap-min',
        'text': 'lib/text',
        'utils': 'utils',
        'paginator': 'views/paginator',
        
        'HomeViewTpl' : '../templates/home/HomeView.html',
        'AboutViewTpl' : '../templates/about/AboutView.html',
                
        'HomeView' : 'views/home',
        'AboutView' : 'views/about',

        // 'ArticlesViewTpl' : '../templates/articles/ArticleView.html',
        // 'ArticleModel': 'models/article',
        // 'ArticleCollection' : 'collections/articles'
        // 'ArticlesView' : 'views/articles',
        // 'ArticleViewTpl' : '../templates/articles/ArticleView.html',
        // 'ArticleDetailView' : 'views/ArticleDetailView',


        'ArticleModel': 'models/article',
        'ArticlesCollection': 'collections/articles',
        'ArticleView': 'views/articledetails',
        'ArticleViewTpl': '../templates/articles/ArticleView.html',
        'ArticleListView': 'views/articlelist',
        'ArticleListItemView': 'views/articlelistitem',
        'ArticleListItemViewTpl': '../templates/articles/ArticleListItemView.html',


        'ResumeView' : 'views/ResumeView',
        'ResumeEditView' : 'views/ResumeEditView',
        'PhotoView' : 'views/PhotoView',

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
