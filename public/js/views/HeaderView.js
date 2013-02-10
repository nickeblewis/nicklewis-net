define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/headerTemplate.html'
], function($, _, Backbone, headerTemplate){

    var HeaderView = Backbone.View.extend({
        el: $(".header"),

        render: function(){

//      $('.menu li').removeClass('active');
//      $('.menu li a[href="#"]').parent().addClass('active');
            this.$el.html(headerTemplate);

//      var sidebarView = new SidebarView();
//      sidebarView.render();

        }

    });

    return HeaderView;

});
