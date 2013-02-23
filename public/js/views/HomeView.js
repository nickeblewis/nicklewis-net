define([
  'jquery',
  'underscore',
  'backbone',
  'models/home',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, Home, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#contentmain"),

    render: function(){ 
      var home = new Home();
      this.$el.html( _.template(homeTemplate, home.attributes ));
      return this;
    }

  });

  return HomeView;
});
