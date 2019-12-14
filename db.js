const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();


let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(CONNECTIONSTRING, {useUnifiedTopology: true, useNewUrlParser: true})
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