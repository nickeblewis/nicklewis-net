// Filename: router.js
define([
    'jquery', 'underscore', 'backbone'], function($, _, Backbone){
    return Backbone.Router.extend({
        routes: {
            "index" : "home",
            "articles" : "list",
            "about" : "about",
            "cv" : "cv",

            // Article based routing
            "articles/page/:page" : "list",
            "articles/add" : "addArticle",
            "articles/:id" : "articleDetails",
            

            // Role (CV) based routing
            "roles/page/:page" : "cv",
            "roles/add" : "addRole",
            "roles/:id" : "roleDetails",

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
            require(['routes/list'], function(callback){
                callback(page).done(function(htmlContent) {
                    self.setContent(htmlContent);    
                });                
            });
        },

        articleDetails: function (id) {
            var self = this;
            // this.selectMenuItem();
            require(['routes/addview'], function(av){
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

        roleDetails: function (id) {
            var self = this;
            // this.selectMenuItem();
            require(['routes/addrole'], function(av){
                av.initView(id).done(function(htmlContent){
                    self.setContent(htmlContent);
                });
            });
        },

        addRole: function() {
            var self = this;
            // this.selectMenuItem('add-menu');
            require(['routes/addrole'], function(av){
                var htmlContent = av.initAdd();
                self.setContent(htmlContent);
            });
        },

        addArticle: function() {
            var self = this;
            // this.selectMenuItem('add-menu');
            require(['routes/addView'], function(av){
                var htmlContent = av.initAdd();
                self.setContent(htmlContent);
            });
        },

        about: function() {
            var self = this;
            require(['routes/about'], function(htmlContent){
                self.setContent(htmlContent);
            });
        }

        
    });    
});
