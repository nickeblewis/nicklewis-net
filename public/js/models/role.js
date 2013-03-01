define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.Model.extend({
        urlRoot: "/roles",
        idAttribute: "_id",

        initialize: function () {},

        defaults: {
            _id: null,
            title: "i20 Water Ltd",
            description: "test",
            skills: ["HTML","CSS"],
            startdate: "",
            enddate: ""
        }
    });
});
