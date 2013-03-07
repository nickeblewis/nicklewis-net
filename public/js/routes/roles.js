define(['jquery','underscore', 'RolesCollection', 'RoleListItemView', 'RoleListView'], function($, _, RoleCollection, RoleListItemView, RoleListView){
    return function(page){
        var p = page ? parseInt(page, 10) : 1,
            roleList = new RoleCollection(),
            defer = $.Deferred(),
            renderPromise = defer.then(function(){
                return new RoleListView({model: roleList, page: p}).el;
            });
        roleList.fetch({success: function(){
            defer.resolve();
        }});
        return renderPromise;
    };
});
