define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.Model.extend({
        

        initialize: function() {

        },

        defaults: {
            introduction: '<p>I am a web developer who works with a multitude of technologies and people in the design world to help make their designs or basic ideas a reality in terms of a living, breathing site. I am based in Farnborough (Hampshire), with easy access to London and other parts of the UK. I have been in the software business for around 20 years and in recent times, been attracted strongly to web development. My work has got me involved with Microsoft technologies, most notably .NET and more recently MVC. I now work more and more with the new and exciting Javascript frameworks which provide beautifully light, yet robust web solutions. jQuery, backboneJS, angularJS, knockoutJS and NodeJS are all fantastic. I love them.</p><p>I am also a photographer and have written articles about the web for photography magazines in the past. I used to shoot concerts and at the time was frequently published in the national press. However my passion for the web was and still is a lot stronger. Photography still plays an important role in my life, which is why when building sites, I put those skills to use too. Nothing learnt, should be wasted. Skills are valuable.</p><p>Please stay tuned to this website for I plan to use it as a way of demonstrating web techniques and a lot of other stuff. Stuff is great.</p>',
            
            currently: 'Contracting for Avvio Ltd nr. Henley-on-Thames. However this has just come to an end, so now putting my marketing hat on for the coming week to look for new projects to jump on. Now is the time to call me!',
            
            projects: [
                'Journog',
                'Farnborough Guide',
                'Nick Lewis Site',
                'Cool Projects',
                'Newington Village Hall'
                ],

            looking: 'I provide freelance or contract services to businesses and you may read up more on this under my resume pages',
            coding: 'If you are interested in coding yourself, then you may be interested to know that this site was developed using BackboneJS, NodeJS/Express, Twitter Bootstrap, MongoDB and we host this site on Heroku. Cool hey?'
        }
    });
});
