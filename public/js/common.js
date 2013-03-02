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
        // 'ArticleModel' : 'models/article',
        'ArticlesCollection': 'collections/articles',
        'ArticleView': 'views/articledetails',
        'ArticleViewTpl': '../templates/articles/ArticleView.html',
        'ArticleListView': 'views/articlelist',
        'ArticleListItemView': 'views/articlelistitem',
        'ArticleListItemViewTpl': '../templates/articles/ArticleListItemView.html'
        // 'ResumeView' : 'views/ResumeView',
        // 'ResumeEditView' : 'views/ResumeEditView',
        // 'PhotoView' : 'views/PhotoView'
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
