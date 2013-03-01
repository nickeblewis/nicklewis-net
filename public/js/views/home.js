define([
  'jquery',
  'underscore',
  'backbone',
  'models/home',
  'text!HomeViewTpl'
], function($, _, Backbone, Home, HomeViewTpl){

  return Backbone.View.extend({

    template: _.template(HomeViewTpl),

    initialize:function () {
      this.render();
    },

    render: function(){ 
      var home = new Home();
      $(this.el).html(this.template(home.attributes));
      return this;
    }
  });
});
