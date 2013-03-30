var express = require('express'),
    path = require('path'),
    http = require('http'),
    mandrill = require('node-mandrill')('AY47uaXuRNSIGcn2yI5y4A'),
    api = require('./routes/api'),
    hash = require('./routes/pass').hash;

var app = module.exports = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('keyboard cat'));
    app.use(express.session());
    app.use(express.static(path.join(__dirname, 'public')));

    // Session-persisted message middleware

    app.use(function(req, res, next){
        var err = req.session.error
            , msg = req.session.success;
        delete req.session.error;
        delete req.session.success;
        res.locals.message = '';
        if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
        if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
        next();
    });
});

app.post('/sendemail', api.sendEmail);
app.put('/sendemail', api.sendEmail);
app.get('/sendemail', api.sendEmail);
app.get('/:collection', api.findAll);
app.get('/:collection/:id', api.findById);
app.post('/:collection', api.addItem);
app.put('/:collection/:id', api.updateItem);
app.delete('/:collection/:id', api.deleteItem);

// dummy database

var users = {
    tj: { name: 'tj' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash('foobar', function(err, salt, hash){
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash(pass, user.salt, function(err, hash){
        if (err) return fn(err);
        if (hash == user.hash) return fn(null, user);
        fn(new Error('invalid password'));
    })
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

//app.get('/', function(req, res){
//    res.redirect('login');
//});

app.get('/restricted', restrict, function(req, res){
    res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
});

app.get('/logout', function(req, res){
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function(){
        res.redirect('/');
    });
});

app.get('/login', function(req, res){
    res.render('login');
});

app.post('/login', function(req, res){
    authenticate(req.body.username, req.body.password, function(err, user){
        if (user) {
            // Regenerate session when signing in
            // to prevent fixation
            req.session.regenerate(function(){
                // Store the user's primary key
                // in the session store to be retrieved,
                // or in this case the entire user object
                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.name
                    + ' click to <a href="/logout">logout</a>. '
                    + ' You may now access <a href="/restricted">/restricted</a>.';
                res.redirect('back');
            });
        } else {
            req.session.error = 'Authentication failed, please check your '
                + ' username and password.'
                + ' (use "tj" and "foobar")';
            res.redirect('login');
        }
    });
});
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});