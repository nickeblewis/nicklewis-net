define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/photos/photoTemplate.html'
], function($, _, Backbone, photoTemplate){

    var PhotoView = Backbone.View.extend({
        el: $("#contentmain"),

        render: function(){
            this.$el.html(photoTemplate);
            return this;
        }
    });

    return PhotoView;

});
