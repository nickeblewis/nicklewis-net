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

app.get('/:collection', article.findAll);
app.get('/:collection/:id', article.findById);
app.post('/:collection', article.addItem);
app.put('/:collection/:id', article.updateItem);
app.delete('/:collection/:id', article.deleteItem);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
