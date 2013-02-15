define(['underscore', 'backbone', 'models/article'],
    function(_, Backbone, RoleModel) {
    var Roles = Backbone.Collection.extend({
        model: ArticleModel,
        url: "/roles"
    });
     return Roles;
});