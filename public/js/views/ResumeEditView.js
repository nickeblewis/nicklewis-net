define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/resume/resumeeditTemplate.html',
    'models/role'
], function($, _, Backbone, resumeeditTemplate, Resume) {
    var ResumeEditView = Backbone.View.extend({
        el: $("#contentmain"),

        events: {
            "click .save" : "saveResume"
        },

        render: function (id) {
            var that = this;
            var resume = new Resume({_id: id});
            resume.fetch({
                success: function() {
                    $(that.el).html(_.template(resumeeditTemplate, resume.attributes));
                }
            });

            return this;
        },

        saveResume: function() {
             this.model.set({
            title:$('#title').val(),
            description:$('#description').val()
        });
            this.model.save();
        return false;
        }
    });

    return ResumeEditView;
});