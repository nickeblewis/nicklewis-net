require.config({
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'underscore': 'vendor/underscore/underscore-min',
        'backbone': 'vendor/backbone/backbone-min',
        'moment': 'vendor/moment/moment',
        'bootstrap': 'lib/bootstrap-min',
        'text': 'lib/text',
        'utils': 'utils',
        'paginator': 'views/paginator',
        'HomeViewTpl' : '../templates/home/HomeView.html',
        'AboutViewTpl' : '../templates/about/AboutView.html',
        'ContactViewTpl' : '../templates/contact/ContactView.html',
        'HomeView' : 'views/home',
        'AboutView' : 'views/about',
        'ContactView' : 'views/contact',
        'ArticlesCollection': 'collections/articles',
        'ArticleView': 'views/articledetails',
        'ArticleViewTpl': '../templates/articles/ArticleView.html',
        'ArticleListView': 'views/articlelist',
        'ArticleListItemView': 'views/articlelistitem',
        'ArticleListItemViewTpl': '../templates/articles/ArticleListItemView.html',
        'RolesCollection': 'collections/roles',
        'RoleView': 'views/roledetails',
        'RoleViewTpl': '../templates/roles/RoleView.html',
        'RoleListView': 'views/rolelist',
        'RoleListItemView': 'views/rolelistitem',
        'RoleListItemViewTpl': '../templates/roles/RoleListItemView.html'

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
