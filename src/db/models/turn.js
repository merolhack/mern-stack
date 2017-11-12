/**
 * MongoDB Schema
 */
// Dependencies
const mongoose = require('mongoose');

// Schema for the turn
const turnSchema = new mongoose.Schema({
    counter: {
        type: Number,
        required: true,
    },
    group: {
        type: String,
        trim: true,
        required: true,
    },
    window: {
        type: Number,
        required: false,
    },
    mobileDateCreated: {
        type: Date,
    },
    reset: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});
const turnModel = mongoose.model('Turn', turnSchema);

module.exports = turnModel;
