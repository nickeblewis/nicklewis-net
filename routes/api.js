var mongo = require('mongodb'),
    mandrill = require('node-mandrill')('AY47uaXuRNSIGcn2yI5y4A');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

//var server = new Server('localhost', 27017, {auto_reconnect: true});
var server = new Server('linus.mongohq.com', 10050, {auto_reconnect: true});
db = new Db('nicklewis', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'nicklewis' database");
        db.authenticate('nickeblewis', 'Winchester72', function(err, result) {
            //  console.log(err);
            // console.log(result);
        });
        // db.collection('nicklewis', {safe:true}, function(err, collection) {
        //     // TODO: I don't want this to be added using populatedb anymore, the data will be defined in one place, the database
        //     if (err) {
        //         console.log("The 'nicklewis' collection doesn't exist. Creating it with sample data...");
        //         populateDB();
        //     }
        // });
    }
    
});

exports.findById = function(req, res) {
    var id = req.params.id;
    var coll = req.params.collection;
    console.log('Retrieving article: ' + id);
    db.collection(coll, function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    var coll = req.params.collection;
    console.log('you passed through the collection of ' + coll);
    db.collection(coll, function(err, collection) {
        collection.find().sort({"order" : -1 }).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addItem = function(req, res) {
    var article = req.body;
    var coll = req.params.collection;
    console.log('Adding item: ' + JSON.stringify(article));
    db.collection(coll, function(err, collection) {
        collection.insert(article, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateItem = function(req, res) {
    var id = req.params.id;
    var article = req.body;
    var coll = req.params.collection;
    delete article._id;
    console.log('Updating article: ' + id);
    console.log(JSON.stringify(article));
    db.collection(coll, function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, article, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating article: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(article);
            }
        });
    });
}

exports.deleteItem = function(req, res) {
    var id = req.params.id;
    var coll = req.params.collection;
    console.log('Deleting article: ' + id);
    db.collection(coll, function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

exports.sendEmail = function(req, res) {

    var email = req.body;

    //send an e-mail to nick lewis
    mandrill('/messages/send', {
        message: {
            to: [{email: 'nickeblewis@gmail.com', name: 'Nick Lewis'}],
            from_email: email.email,
            subject: "[nicklewis.co.uk] - Website enquiry from " + email.name,
            text: email.message + ' ' + email.phone
        }
    }, function(error, response)
    {
        //uh oh, there was an error
        if (error) console.log( JSON.stringify(error) );

        //everything's good, lets see what mandrill said
        else console.log(response);
    });
}
