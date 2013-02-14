define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){

    var AboutView = Backbone.View.extend({
        el: $("#content"),

        render: function(){

//      $('.menu li').removeClass('active');
//      $('.menu li a[href="#"]').parent().addClass('active');
        this.$el.html(aboutTemplate);

//      var sidebarView = new SidebarView();
//      sidebarView.render();

        }

    });

    return AboutView;

});
