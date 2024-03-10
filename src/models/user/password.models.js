const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, { timestamps: true });


passwordSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        return next(error);
    }
});


passwordSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const Password = mongoose.model('Password', passwordSchema);

module.exports = { Password };


