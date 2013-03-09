//RoleListItemView
define(['jquery', 'underscore', 'backbone','text!RoleListItemViewTpl', 'moment'],
    function($, _, Backbone, RoleListItemViewTpl, moment){

    var viewHelpers = {
        getAddress: function(type){
            var address = _.find(this.addresses, function(addr) {
                return addr.type == type;
            });
            return address;
        }
    };

    return Backbone.View.extend({

        template: _.template(RoleListItemViewTpl),
        tagName: "li",

        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            // var data = this.model.toJSON();
            // _.extend(data, viewHelpers);

            $(this.el).html(this.template(this.model.toJSON()));
            return this;

            // var html = _.template($(this.template), data);
            // this.$el.html(html);

            return this;
        }
    });
});
