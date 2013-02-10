define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      
//      $('.menu li').removeClass('active');
//      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

//      var sidebarView = new SidebarView();
//      sidebarView.render();
 
    }

  });

  return HomeView;
  
});
