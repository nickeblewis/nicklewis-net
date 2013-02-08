// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.

// TODO: Change the filenames so that it is hyphen min rather than dot min
require.config({
    paths: {
        jquery: 'libs/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        bootstrap: 'libs/bootstrap-min',
        templates: '../templates' // TODO: Move the tpl directory up, back to where it was an call it templates not tpl
    }

});

require([

    // Load our app module and pass it to our definition function
    'app',
    
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});
