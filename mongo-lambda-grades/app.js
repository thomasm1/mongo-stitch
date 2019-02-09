'use strict'
// Seret tmm-dailytech
var MongoClientTm = require('mongodb').MongoClient;

let atlas_connection_uri;
let cachedDb = null; // declare outside object plann to cache for 

exports.handler = (event, context, callback) => {  // here this how Lambda AWS expects it ..(using lambda-local)
    var uri = process.env['MONGODB_ATLAS_CLUSTER_URI'];  // declare MONGODB Node.js driver

    if (atlas_connection_uri != null) {
        processEvent(event, context, callback);
    }
    else {
        atlas_connection_uri = uri;
        console.log('theAtlas connection string is ' + atlas_connection_uri);
        processEvent(event, context, callback);
    }
};

function processEvent(event, context, callback) {
    console.log('Callign MongoDB Atlas from AWS Lambda with event: ' + JSON.stringify(event));
    var jsonContents = JSON.parse(JSON.stringify(event));

    //date conversion for grades array
    if(jsonContents.grades != null) {
        for(var i = 0, len=jsonContents.grades.length; i < len; i++) {
            // if want to preserve original dataes
            jsonContents.grades[i].date = new Date(jsonContents.grades[i].date);

            ///real
            jsonContents.grades[i].date = new Date();
        }
    }

    context.callbackWaitsForEmptyEventLoop = false;
    try {
        if (cachedDb === null) {
            console.log('=> connecting to data base ....');
            MongoClient.connect(atlas_connection_uri, function (err, client) {
                cachedDb = client.db('travel');
                return createDoc(cachedDb, jsonContents, callback);
            });
        }
        else {
            createDoc(cachedDb, jsonContents, callback);
        }
    }
    catch (err) {
        console.error('an error occurred', err);
    }
}
function createDoc (db, json, callback) {
    db.collection('restaurants').insertOne (json, function(err, result) {
        if(err!=null) {
            console.error("an error occurred in createDoc .. oops", err);
        }
        else {
            console.log("kudos! .. Created an entry you have into the restaurants collection id: " + result.insertedId);
            callback(null, "success");
        }
    })
}