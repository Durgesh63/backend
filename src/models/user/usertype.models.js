const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
    usertype: {
        type: String,
        required: true,
        unique: [true, 'User Type already exists']
    }
}, { timestamps: true });


const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = { UserType };

