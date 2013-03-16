var express = require('express'),
    path = require('path'),
    http = require('http'),
    mandrill = require('node-mandrill')('AY47uaXuRNSIGcn2yI5y4A'),
    article = require('./routes/articles');

var app = express();

//send an e-mail to nick lewis
mandrill('/messages/send', {
    message: {
        to: [{email: 'nickeblewis@gmail.com', name: 'Nick Lewis'}],
        from_email: 'nick@nicklewis.co.uk',
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});

// var mandrill = new Mandrill();

// m.users.info(function(info) {
// 	console.log('Reputation' + info.reputation + ', Hourly Quota:' + info.hourly_quota);
// });

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
app.post('/sendemail', article.sendEmail);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
