define(['underscore', 'backbone'], function(_, Backbone) {
    var Photograph = Backbone.Model.extend({
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

    return Photograph;
});
