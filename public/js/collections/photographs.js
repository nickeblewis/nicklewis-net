// TODO: Had to change ArticleModel below to models/article throughout the project, will need to change back
define(['underscore', 'backbone', 'models/article'],
    function(_, Backbone, RoleModel) {
    var Photographs = Backbone.Collection.extend({
        model: ArticleModel,
        url: "/photographs"
    });
     return Photographs;
});