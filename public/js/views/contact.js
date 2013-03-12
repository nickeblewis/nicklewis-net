define([
    'jquery',
    'underscore',
    'backbone',
    'text!ContactViewTpl'
], function($, _, Backbone, ContactViewTpl){

    return Backbone.View.extend({

        template: _.template(ContactViewTpl),

        initialize:function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        }
    });
});
