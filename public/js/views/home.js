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
    },

    events: {
      "hover .design" : "designHover",
      "hover .photos" : "photosHover",
      "hover .code" : "codeHover",
      "hover .writing" : "writingHover"
    },

    designHover: function() {
      $('#detailbox').text('Design is not just about making a website nice on the eye, it is also about making it tick!');
    },
    photosHover: function() {
            $('#detailbox').text('Photography is in the heart and soul, good photography helps provide a narrative.');

    },
    codeHover: function() {
            $('#detailbox').text('Code, mostly Javascript here is what drives us, not just the sites we build!');

    },
    writingHover: function() {
            $('#detailbox').text('Words are invaluable and as you can tell we love gorgeous typography too!');

    }
  });
});
