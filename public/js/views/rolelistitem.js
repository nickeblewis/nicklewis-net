//RoleListItemView
define(['jquery', 'underscore', 'backbone','text!RoleListItemViewTpl'],
    function($, _, Backbone, RoleListItemViewTpl){

    return Backbone.View.extend({

        template: _.template(RoleListItemViewTpl),
        
        tagName: "li",

        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });
});
