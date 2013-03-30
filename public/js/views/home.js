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
      "click .design" : "designClick",
      "click .photos" : "photosClick",
      "click .code" : "codeClick",
      "click .writing" : "writingClick"
    },

    designClick: function() {
      $('#detailbox').text('Design is nice');
    },
    photosClick: function() {
            $('#detailbox').text('Love the photography');

    },
    codeClick: function() {
            $('#detailbox').text('Coding cool');

    },
    writingClick: function() {
            $('#detailbox').text('Love a bit of writing');

    }
  });
});
