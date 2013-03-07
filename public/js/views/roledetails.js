define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'text!RoleViewTpl',
    // TODO: Had to change RoleModel below to models/article throughout the project, will need to change back
    'models/role'
], function($, _, Backbone, utils, RoleViewTpl, Role) {
    return Backbone.View.extend({
        
        initialize: function () {
            this.render();
        },

        template: _.template(RoleViewTpl),

        render: function (id) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            "change"        : "change",
            "click .save"   : "beforeSave",
            "click .delete" : "deleteRole",
            "drop #picture" : "dropHandler"
        },

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

        beforeSave: function () {
            var self = this;
            var check = this.model.validateAll();
            if (check.isValid === false) {
                utils.displayValidationErrors(check.messages);
                return false;
            }
            this.saveRole();
            return false;
        },

        saveRole: function () {
            var self = this;
            console.log('before save');
            this.model.save(null, {
                success: function (model) {
                    self.render();
                    app.navigate('roles/' + model.id, false);
                    utils.showAlert('Success!', 'Role saved successfully', 'alert-success');
                },
                error: function () {
                    utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
                }
            });
        },

        deleteRole: function () {
            this.model.destroy({
                success: function () {
                    alert('Role deleted successfully');
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
