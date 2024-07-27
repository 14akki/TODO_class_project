const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoname: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    createdata: {
        type: String,
        required: true,
    },
    updatedate: {
        type: String,
        required: true,
    },
});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;