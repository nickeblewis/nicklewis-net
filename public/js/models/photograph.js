define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.Model.extend({
        urlRoot: "/photographs",
        idAttribute: "_id",

        initialize: function () {},

        defaults: {
            _id: null,
            title: "Title",
            description: "test",
            image: null
        }
    });
});
