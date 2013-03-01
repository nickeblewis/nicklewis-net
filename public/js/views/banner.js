define([
  'jquery',
  'underscore',
  'backbone',
  'text!BannerViewTpl'
], function($, _, Backbone, BannerViewTpl){

  return Backbone.View.extend({

    template: _.template(BannerViewTpl),

    initialize:function () {
      this.render();
    },

    render: function(){      
      $(this.el).html(this.template());
      return this;
    }
  });
});
