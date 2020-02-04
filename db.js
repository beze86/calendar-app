const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();


let url = process.env.CONNECTIONSTRINGLOCAL || process.env.CONNECTIONSTRINGREMOTE
let obj = {useUnifiedTopology: true, useNewUrlParser: true}

let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(url, obj)
    .then((client) => {
        _db = client.db();
        callback();
    })
    .catch((err) => {
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