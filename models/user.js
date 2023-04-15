const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'name is required'],
        trim: true
    },
    email: {
        type: String, 
        required: [true, 'email is required'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    phone: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String, 
    },
    role: {
        type: String, 
        enum: ['admin', 'user'],
        default: 'user',
    },
    isDeleted:{
        type: Boolean,
        default: false,
    }

    
}, { timestamps: true });

const User = new mongoose.model("User", userSchema);

module.exports = User;