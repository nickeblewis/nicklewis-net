var mongo = require('mongodb');

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
        collection.find().toArray(function(err, items) {
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
    console.log("The email is " + email);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var articles = [
        {
            name: "Building a new website for 2013",
            year: "2013-02-03T16:53:22.317Z",
            summary: "Recently I have started to build web apps using Javascript frameworks and so I decided to re-build my own site using a mixture of these technologies...",
            description: "Recently I have started to build web apps using Javascript frameworks and so I decided to " +
                "re-build my own site using a mixture of these technologies. If you take a glance at the footer of this " +
                "site or the drop-down in the main navigation for resources, you will find a complete list of the " +
                "technologies I have been using. I am also taking the brave step of making this site publicly " +
                "available on GitHub. So if you give it a few months whilst it matures, who knows you may like it, " +
                "find it useful and use it to kickstart your own web projects. Be my guest.",
            picture: 'http://placehold.it/200x100'
        },
        {
            name: "Second",
            year: "2013-02-03T16:53:22.317Z",
            summary: "Recently I have started to build web apps using Javascript frameworks and so I decided to re-build my own site using a mixture of these technologies...",
            description: "Recently I have started to build web apps using Javascript frameworks and so I decided to " +
                "re-build my own site using a mixture of these technologies. If you take a glance at the footer of this " +
                "site or the drop-down in the main navigation for resources, you will find a complete list of the " +
                "technologies I have been using. I am also taking the brave step of making this site publicly " +
                "available on GitHub. So if you give it a few months whilst it matures, who knows you may like it, " +
                "find it useful and use it to kickstart your own web projects. Be my guest.",
            picture: null
        },
        {
            name: "Third",
            year: "2013-02-03T16:53:22.317Z",
            summary: "Recently I have started to build web apps using Javascript frameworks and so I decided to re-build my own site using a mixture of these technologies...",
            description: "Recently I have started to build web apps using Javascript frameworks and so I decided to " +
                "re-build my own site using a mixture of these technologies. If you take a glance at the footer of this " +
                "site or the drop-down in the main navigation for resources, you will find a complete list of the " +
                "technologies I have been using. I am also taking the brave step of making this site publicly " +
                "available on GitHub. So if you give it a few months whilst it matures, who knows you may like it, " +
                "find it useful and use it to kickstart your own web projects. Be my guest.",
            picture: null
        },
        {
            name: "Fourth",
            year: "2013-02-03T16:53:22.317Z",
            summary: "Recently I have started to build web apps using Javascript frameworks and so I decided to re-build my own site using a mixture of these technologies...",
            description: "Recently I have started to build web apps using Javascript frameworks and so I decided to " +
                "re-build my own site using a mixture of these technologies. If you take a glance at the footer of this " +
                "site or the drop-down in the main navigation for resources, you will find a complete list of the " +
                "technologies I have been using. I am also taking the brave step of making this site publicly " +
                "available on GitHub. So if you give it a few months whilst it matures, who knows you may like it, " +
                "find it useful and use it to kickstart your own web projects. Be my guest.",
            picture: null
        },
        {
            name: "Fifth",
            year: "2013-02-03T16:53:22.317Z",
            summary: "Recently I have started to build web apps using Javascript frameworks and so I decided to re-build my own site using a mixture of these technologies...",
            description: "Recently I have started to build web apps using Javascript frameworks and so I decided to " +
                "re-build my own site using a mixture of these technologies. If you take a glance at the footer of this " +
                "site or the drop-down in the main navigation for resources, you will find a complete list of the " +
                "technologies I have been using. I am also taking the brave step of making this site publicly " +
                "available on GitHub. So if you give it a few months whilst it matures, who knows you may like it, " +
                "find it useful and use it to kickstart your own web projects. Be my guest.",
            picture: null
        }];

    db.collection('articles', function(err, collection) {
        collection.insert(articles, {safe:true}, function(err, result) {
            console.log(err);
            console.log(result);
        });
    });

    // TODO: We need to add collections for resume and other things
};
