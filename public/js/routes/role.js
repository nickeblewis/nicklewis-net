// TODO: Had to change RoleModel below to models/role throughout the project, will need to change back
define(['jquery', 'underscore', 'models/role', 'RoleView'], function($, _, Role, RoleView){
    return {
        initView: function(id){
            var role = new Role({_id: id}),
                defer = $.Deferred(),
                renderPromise = defer.then(function(){
                    return new RoleView({model: role}).el;
                });
            role.fetch({success: function(){
                defer.resolve();
            }});
            return renderPromise;
        },
        initAdd: function(){
            return new RoleView({model: new Role()}).el;
        }
    }
});