define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/articles/listTemplate.html'
], function($, _, Backbone, listTemplate){

    var ListView = Backbone.View.extend({
        el: $("#content"),

        render: function(){

//      $('.menu li').removeClass('active');
//      $('.menu li a[href="#"]').parent().addClass('active');
            this.$el.html(listTemplate);

//      var sidebarView = new SidebarView();
//      sidebarView.render();

        }

    });

    return ListView;

});
