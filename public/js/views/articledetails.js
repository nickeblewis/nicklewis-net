define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'etch',
    'text!ArticleViewTpl',
    'models/article'
], function($, _, Backbone, utils, etch, ArticleViewTpl, Article) {
    return Backbone.View.extend({
        
        initialize: function () {
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
            this.render();
        },

        template: _.template(ArticleViewTpl),

        render: function (id) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            "change"        : "change",
            // "click .save"   : "beforeSave",
            "click .delete" : "deleteArticle",
            "drop #picture" : "dropHandler",
            "mousedown .editable" : "editableClick"
        },

        editableClick: etch.editableInit,

        change: function (event) {
            // Remove any existing alert message
            utils.hideAlert();

            // Apply the change to the model
            var target = event.target;
            var change = {};
            change[target.name] = target.value;
            this.model.set(change);

            // Run validation rule (if any) on changed item
            var check = this.model.validateItem(target.id);
            if (check.isValid === false) {
                utils.addValidationError(target.id, check.message);
            } else {
                utils.removeValidationError(target.id);
            }
        },

        save: function() {
            this.model.attributes.name = this.$('.name').text();
            this.model.attributes.summary = this.$('.summary').text();
            this.model.attributes.description = this.$('.description').text();
            this.beforeSave();
        },

        beforeSave: function () {
            var self = this;
            var check = this.model.validateAll();
            if (check.isValid === false) {
                utils.displayValidationErrors(check.messages);
                return false;
            }
            this.saveArticle();
            return false;
        },

        saveArticle: function () {
            var self = this;
            console.log('before save');
            this.model.save(null, {
                success: function (model) {
                    self.render();
                    app.navigate('articles/' + model.id, false);
                    utils.showAlert('Success!', 'Article saved successfully', 'alert-success');
                },
                error: function () {
                    utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
                }
            });
        },

        deleteArticle: function () {
            this.model.destroy({
                success: function () {
                    alert('Article deleted successfully');
                    window.history.back();
                }
            });
            return false;
        },

        dropHandler: function (event) {
            event.stopPropagation();
            event.preventDefault();
            var e = event.originalEvent;
            e.dataTransfer.dropEffect = 'copy';
            this.pictureFile = e.dataTransfer.files[0];

            // Read the image file from the local file system and display it in the img tag
            var reader = new FileReader();
            reader.onloadend = function () {
                $('#picture').attr('src', reader.result);
            };
            reader.readAsDataURL(this.pictureFile);
        }

    });

});
