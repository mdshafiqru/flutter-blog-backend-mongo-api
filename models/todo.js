const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'title is required'],
    },
    description: String,
    status: {
        type: String, 
        required: true,
        enum: {
            values: ['active', 'inactive'],
            message: 'Status is required.'
        },
    }
}, { timestamps: true });

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;