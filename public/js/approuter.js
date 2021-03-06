// Filename: router.js
define([
    'jquery', 'underscore', 'backbone'], function($, _, Backbone){
    return Backbone.Router.extend({
        routes: {
            "index" : "home",
            "articles" : "list",
            "about" : "about",
            "contact" : "contact",
            "cv" : "cv",
           
            // Portfolio items
            "portfolio" : "portfolio",
            "portfolio/:id" : "portfolioItem",            

            // List stuff
            "articles/page/:page" : "list",

            // Show details
            "articles/:id" : "articleDetails",
            "cv/page/:page" : "cv",
            "cv/:id" : "roleDetails",

            // Add new things - NOTE: Have disabled these for the moment
            "articles/add" : "addArticle",
            "cv/add" : "addRole",

            // Default, if all else fails, just direct the user to our home page
            // TODO: Ideally I would like this to show a fancy 404 page ;-)
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

        list: function(page) {
            var self = this;
            require(['routes/articles'], function(callback){
                callback(page).done(function(htmlContent) {
                    self.setContent(htmlContent);    
                });                
            });
        },

        articleDetails: function (id) {
            var self = this;
            // this.selectMenuItem();
            require(['routes/article'], function(av){
                av.initView(id).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            });
        },

        cv: function(page) {
            var self = this;
            require(['routes/roles'], function(callback){
                callback(page).done(function(htmlContent) {
                    self.setContent(htmlContent);    
                });                
            });
        },

        portfolio: function(page) {
            var self = this;
            require(['routes/portfolio'], function(callback){
                callback(page).done(function(htmlContent) {
                    self.setContent(htmlContent);
                });
            });
        },

        portfolioItem: function(id) {
           var self = this;
            // this.selectMenuItem();
            require(['routes/portfolioitem'], function(av){
                av.initView(id).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            }); 
        },

        roleDetails: function (id) {
            var self = this;
            // this.selectMenuItem();
            require(['routes/role'], function(av){
                av.initView(id).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            });
        },

        // NOTE - Taken the ability to add new items out for now, as I am going to
        // addRole: function() {
        //     var self = this;
        //     // this.selectMenuItem('add-menu');
        //     require(['routes/role'], function(av){
        //         var htmlContent = av.initAdd();
        //         self.setContent(htmlContent);
        //     });
        // },

        // addArticle: function() {
        //     var self = this;
        //     // this.selectMenuItem('add-menu');
        //     require(['routes/article'], function(av){
        //         var htmlContent = av.initAdd();
        //         self.setContent(htmlContent);
        //     });
        // },

        about: function() {
            var self = this;
            require(['routes/about'], function(htmlContent){
                self.setContent(htmlContent);
            });
        },

        contact: function() {
            var self = this;
            require(['routes/contact'], function(av){
                var htmlContent = av.initSend();
                self.setContent(htmlContent);
            });
        }        
    });    
});
