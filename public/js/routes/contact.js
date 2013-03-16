define(['jquery', 'underscore', 'models/email', 'ContactView'], function($, _, Email, ContactView){
    return {
        initView: function(id){
            var email = new Email({_id: id}),
                defer = $.Deferred(),
                renderPromise = defer.then(function(){
                    return new ContactView({model: Email}).el;
                });
            email.fetch({success: function(){
                defer.resolve();
            }});
            return renderPromise;
        },
        initSend: function(){
            return new ContactView({model: new Email()}).el;
        }
    }
});