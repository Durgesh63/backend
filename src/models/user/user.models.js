const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const userSchemas = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already in use'],
        index: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    password: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Password',
        require: [true, "Password is required"]
    },
    userType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserType"
    },
    image: {
        type: mongoose.Schems.Types.ObjectId,
        ref: "Image"
    },
    group: [
        {
            type: mongoose.Schems.Types.ObjectId,
            ref: "Group"
        }
    ],

}, { timestamps: true });

userSchemas.plugin(aggregatePaginate);


const User = mongoose.Model('User', userSchemas);

module.exports = {
    User
}
