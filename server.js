var express = require('express'),
    path = require('path'),
    http = require('http'),
    mandrill = require('node-mandrill')('AY47uaXuRNSIGcn2yI5y4A'),
    api = require('./routes/api'),
    passport = require('passport'),
    flash = require('connect-flash'),
    LocalStrategy = require('passport-local').Strategy;


// var app = express();

var users = [
    { id: 1, username: 'bob', password: 'tortoise', email: 'bob@example.com', name: 'Test User 1' },
    { id: 2, username: 'joe', password: 'dolphin', email: 'joe@example.com', name: 'Test User 2' },
    { id: 3, username: 'nicklewis', password: 'rabbit', email: 'nickeblewis@gmail.com', name: 'Nick Lewis' },
    { id: 4, username: 'tinalewis', password: 'scout', email: 'tinalewis68@gmail.com', name: 'Tina Lewis' }
];

function findById(id, fn) {
    db.users.findOne({_id:objectId(id)}, function(e, o) {
        if (o) {
            return fn(null, o);
        } else {
            return fn(null, null);
        }
    });
    return(null,null);
}

function findByUsername(username, fn) {
    console.log("Searching for " + username);
    for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
        console.log("we matched the username!");
      return fn(null, user);
    }
  }
  return fn(null, null);
}

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            findByUsername(username, function(err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
                if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
                return done(null, user);
            })
        });
    }
));

var app = module.exports = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
  
);
app.post('/sendemail', api.sendEmail);
app.put('/sendemail', api.sendEmail);
app.get('/sendemail', api.sendEmail);
app.get('/:collection', api.findAll);
app.get('/:collection/:id', api.findById);
app.post('/:collection', api.addItem);
app.put('/:collection/:id', api.updateItem);
app.delete('/:collection/:id', api.deleteItem);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
