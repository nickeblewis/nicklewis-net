// RoleListView
define(['jquery', 'underscore', 'backbone', 'RoleListItemView', 'paginator'], function($, _, Backbone, RoleListItemView, Paginator){

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            var roles = this.model.models;
            var len = roles.length;
            var startPos = 0
            var endPos = len;

            $(this.el).html('<ul class="thumbnails"></ul>');

            for (var i = startPos; i < endPos; i++) {                
                $('.thumbnails', this.el).append(new RoleListItemView({model: roles[i]}).render().el);
            }

            return this;
        }
    });    
});
