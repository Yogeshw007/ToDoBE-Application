const mongoose = require('mongoose');

// To do schema
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        default: false
    }
});

// Todo model
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;