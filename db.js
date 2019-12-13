const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let connectionString = "mongodb+srv://beze:administrator12345cluster0-abtcq.mongodb.net/calendar?retryWrites=true&w=majority";
let url = "mongodb://localhost:27017/testdb";

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then((client) => {
        _db = client.db();
        callback();
    })
    .catch((err) => {
        // console.log(err);
        throw err;
    })
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'Database not found';
}

module.exports.getDb = getDb;
module.exports.mongoConnect = mongoConnect;