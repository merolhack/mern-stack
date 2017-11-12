/**
 * MongoDB Schema
 */
// Dependencies
const mongoose = require('mongoose');

// Schema for the window
const windowSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    locked: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true
});
const windowModel = mongoose.model('window', windowSchema);

module.exports = windowModel;
