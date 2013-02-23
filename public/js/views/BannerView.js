define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/layout/bannerTemplate.html'
], function($, _, Backbone, bannerTemplate){

  var BannerView = Backbone.View.extend({
    el: $(".banner"),

    render: function(){      
      this.$el.html(bannerTemplate);
      return this;
    }

  });

  return BannerView;
});
