require.config({
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'underscore': 'vendor/underscore/underscore-min',
        'backbone': 'vendor/backbone/backbone-min',
        'moment': 'vendor/moment/moment',
        'etch' : 'vendor/etch/scripts/etch',
        'bootstrap': 'lib/bootstrap-min',
        'text': 'lib/text',
        'utils': 'utils',
        'paginator': 'views/paginator',
        'HomeViewTpl' : '../templates/HomeView.html',
        'AboutViewTpl' : '../templates/AboutView.html',
        'ContactViewTpl' : '../templates/ContactView.html',
        'HomeView' : 'views/home',
        'AboutView' : 'views/about',
        'ContactView' : 'views/contact',
        'ArticlesCollection': 'collections/articles',
        'ArticleView': 'views/articledetails',
        'ArticleViewTpl': '../templates/ArticleView.html',
        'ArticleListView': 'views/articlelist',
        'ArticleListItemView': 'views/articlelistitem',
        'ArticleListItemViewTpl': '../templates/ArticleListItemView.html',
        'RolesCollection': 'collections/roles',
        'RoleView': 'views/roledetails',
        'RoleViewTpl': '../templates/RoleView.html',
        'RoleListView': 'views/rolelist',
        'RoleListItemView': 'views/rolelistitem',
        'RoleListItemViewTpl': '../templates/RoleListItemView.html'

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
        },
        'etch' : {
            deps: ['underscore', 'backbone', 'jquery'],
            exports: 'etch'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'approuter', 'bootstrap'], function($, _, Backbone, AppRouter){
    $(function(){
        window.app = new AppRouter();
        Backbone.history.start();
    });
});
