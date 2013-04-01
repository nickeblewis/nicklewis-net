require.config({
    paths: {

        // libs
        'jquery': 'vendor/jquery/jquery.min',
        'underscore': 'vendor/underscore/underscore-min',
        'backbone': 'vendor/backbone/backbone-min',
        'moment': 'vendor/moment/moment',
        'etch' : 'vendor/etch/scripts/etch',
        'isotope' : 'vendor/isotope/jquery.isotope',
        'bootstrap': 'lib/bootstrap-min',
        'text': 'lib/text',
        'fancybox': 'vendor/fancybox/source/jquery.fancybox.pack',

        // modules
        'utils': 'utils',
        'paginator': 'views/paginator',

        // templates
        'HomeViewTpl' : '../templates/HomeView.html',
        'AboutViewTpl' : '../templates/AboutView.html',
        'ContactViewTpl' : '../templates/ContactView.html',
        'ArticleViewTpl': '../templates/ArticleView.html',
        'ArticleListItemViewTpl': '../templates/ArticleListItemView.html',
        'PortfolioListItemViewTpl': '../templates/PortfolioListItemView.html',
        'RoleViewTpl': '../templates/RoleView.html',
        'RoleListItemViewTpl': '../templates/RoleListItemView.html',
        'PortfolioViewTpl': '../templates/PortfolioView.html',
        'PortfolioContainerViewTpl': '../templates/PortfolioContainerView.html',

        // views
        'HomeView' : 'views/home',
        'AboutView' : 'views/about',
        'ContactView' : 'views/contact',
        'ArticleView': 'views/articledetails',
        'PortfolioView': 'views/portfoliodetails',
        'ArticleListView': 'views/articlelist',
        'PortfolioListView': 'views/portfoliolist',
        'ArticleListItemView': 'views/articlelistitem',
        'PortfolioListItemView': 'views/portfoliolistitem',
        'RoleView': 'views/roledetails',
        'RoleListView': 'views/rolelist',
        'RoleListItemView': 'views/rolelistitem',

        // collections
        'ArticlesCollection': 'collections/articles',
        'RolesCollection': 'collections/roles',
        'PortfolioCollection': 'collections/portfolio',
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
        },
        'isotope' : {
            deps: ['underscore', 'backbone', 'jquery'],
            exports: 'isotope'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'approuter', 'bootstrap'], function($, _, Backbone, AppRouter){
    $(function(){
        window.app = new AppRouter();
        
        Backbone.history.start();
    });
});
