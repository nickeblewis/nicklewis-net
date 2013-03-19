var express = require('express'),
    path = require('path'),
    http = require('http'),
    mandrill = require('node-mandrill')('AY47uaXuRNSIGcn2yI5y4A'),
    api = require('./routes/api');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

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
