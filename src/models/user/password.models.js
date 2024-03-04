const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, "Your password must be at least 8 characters"],
        maxLength: [1024, 'Your password cannot exceed 1024 characters']
    }
}, { timestamps: true });


const Password = mongoose.model('Password', passwordSchema);

module.exports = { Password };


