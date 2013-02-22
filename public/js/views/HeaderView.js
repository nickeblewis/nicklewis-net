define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layout/headerTemplate.html'
], function($, _, Backbone, headerTemplate){

    var HeaderView = Backbone.View.extend({
        el: $(".header"),

        render: function(){
            this.$el.html(headerTemplate);
        }
    });

    return HeaderView;
});
