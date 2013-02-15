var express = require('express'),
    path = require('path'),
    http = require('http'),
    article = require('./routes/articles');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
        app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/articles', article.findAll);
app.get('/articles/:id', article.findById);
app.post('/articles', article.addArticle);
app.put('/articles/:id', article.updateArticle);
app.delete('/articles/:id', article.deleteArticle);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
