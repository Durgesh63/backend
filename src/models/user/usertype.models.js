const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
    usertype: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'administrator'],
    }
}, { timestamps: true });


const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = { UserType };

