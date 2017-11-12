/**
 * MongoDB Connection
 */
// Dependencies
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const findCollection = require('./findCollection');

// Connect to the database
const config = {
    uri: 'mongodb://localhost',
    db: 'turns-db'
};
const options = {
    useMongoClient: true,
};
mongoose.connect(`${config.uri}/${config.db}`, options);
mongoose.set('debug', true);

const conn = mongoose.connection;

conn.on('open', function () {
    console.log('Connected to database: ' + config.db);
    console.log('collections:', findCollection(conn));
});

module.exports = conn;
