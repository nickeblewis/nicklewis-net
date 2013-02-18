define(['underscore', 'backbone', 'models/article'],
    function(_, Backbone, RoleModel) {
    var Photographs = Backbone.Collection.extend({
        model: ArticleModel,
        url: "/photographs"
    });
     return Photographs;
});