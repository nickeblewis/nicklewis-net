define(['underscore', 'backbone'], function(_, Backbone) {
    var Role = Backbone.Model.extend({
        urlRoot: "/roles",
        idAttribute: "_id",

        initialize: function () {},

        defaults: {
            _id: null,
            title: "",
            description: "",
            skills: "USA",
            startdate: "California",
            enddate: ""
        }
    });

    return Role;
});
