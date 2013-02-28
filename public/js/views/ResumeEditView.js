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
            "click .save" : "save"
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

        save: function() {            
            this.model.save();
        }
    });

    return ResumeEditView;
});