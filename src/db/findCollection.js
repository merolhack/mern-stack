/**
 * MongoDB Collection
 */
// Dependencies
const mongoose = require('mongoose');

// Check if the collection exists
const findCollection = function(conn) {
    let collections = [];
    // Get the list of the collections
    collections = conn.db.listCollections().toArray((err, names) => {
        if (err) console.log('ERROR:', err);
        collections = names;
        console.log('c0llections:', names);
        return collections;
    });
    return collections;
};

module.exports = findCollection;
