define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){

    var AboutView = Backbone.View.extend({
        el: $("#content"),

        render: function(){
            this.$el.html(aboutTemplate);
        }
    });

    return AboutView;

});
