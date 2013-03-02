// Filename: router.js
define([
    'jquery', 'underscore', 'backbone'], function($, _, Backbone){
    return Backbone.Router.extend({
        routes: {
            "index" : "home",
            "articles" : "list",
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

        resume: function() {
            var self = this;
            require(['routes/resume'], function(htmlContent){
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
