require('dotenv').config();

const async = require('async');
const mongoose = require('mongoose');

const Verifier = require('./models/verifier');

const InitiateMongoServer = require('./db/connection');
const mongoURI = process.env.MONGODB_URI_DEV;

InitiateMongoServer(mongoURI, true);

function verifierCreate({ name, password }, cb) {
    const newVerifier = new Verifier({ name, password });

    newVerifier.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Verifier: ' + newVerifier.name);
        cb(null, newVerifier)
    });
}

function populateVerifier(cb) {
    async.parallel([
        cb => verifierCreate({
            name: "admin",
            password: 12345
        }, cb)
    ], cb);
}
 
function deleteDatabse(cb) {
    console.log('Deleting database');
    mongoose.connection.dropDatabase();
    console.log('Detabase deleted');
    cb();
}


async.series([
    deleteDatabse,
    populateVerifier
],
    function (err) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Success');
        }
        mongoose.connection.close();
    });