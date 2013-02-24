define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/resume/resumeTemplate.html',
    'collections/roles'
], function($, _, Backbone, resumeTemplate, Roles) {
    var ResumeView = Backbone.View.extend({
        el: $("#contentmain"),
        initialize: function() {

        },
        render: function () {
            var that = this;
            var roles = new Roles();
            roles.fetch({
                success: function(articles) {
                    $(that.el).html(_.template(resumeTemplate, {roles: roles.models, _:_}));
                    // this.$el.html( _.template(resumeTemplate, roles.attributes ));
                }
            });

            return this;
        }
    });

    return ResumeView;
});