// TODO: Had to change ArticleModel below to models/article throughout the project, will need to change back
define(['underscore', 'backbone', 'models/role'], function(_, Backbone, RoleModel) {
    return Backbone.Collection.extend({
        model: RoleModel,
        url: "/roles"
    });   
});