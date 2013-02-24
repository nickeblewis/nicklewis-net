define(['underscore', 'backbone', 'models/role'],
    function(_, Backbone, RoleModel) {
    var Roles = Backbone.Collection.extend({
        model: RoleModel,
        url: "/roles"
    });
     return Roles;
});