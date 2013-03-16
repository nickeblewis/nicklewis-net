define([
    'jquery',
    'underscore',
    'backbone',
    'text!ContactViewTpl', 'utils'
], function($, _, Backbone, ContactViewTpl, utils){

    return Backbone.View.extend({

        template: _.template(ContactViewTpl),

        initialize:function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        },

        events: {
            "change": "change",
            "click .send": "beforeSend"
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
        
        beforeSend: function() {
            var self = this;
            // var check = this.model.validateAll();
            // if (check.isValid === false) {
            //     utils.displayValidationErrors(check.messages);
            //     return false;
            // }
            this.sendEmail();
            // return false;
            return false;

        },
        
        sendEmail: function () {
            var self = this;
            console.log('send out email');
            this.model.save(null, {
                success: function (model) {
                    self.render();
                    // app.navigate('contact/' + model.id, false);
                    utils.showAlert('Success!', 'Email sent successfully', 'alert-success');
                },
                error: function () {
                    utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
                }
            });
        }
    });
});
