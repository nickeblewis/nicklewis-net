define(['jquery', 'underscore', 'backbone','text!tpl/HomeView.html'], function($, _, Backbone, homeViewTemplate) {
    var HomeView = Backbone.View.extend({

        initialize:function () {
            this.render();
        },

        render:function () {
            $(this.el).html(this.template());
            return this;
        }

    });
    return HomeView;
});