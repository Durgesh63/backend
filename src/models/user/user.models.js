const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Password } = require('./password.models');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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
    // password: {
    //     type: String,
    //     require: [true, "Password is required"]
    // },
    userType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserType"
    },
    // image: {
    //     type: mongoose.Schems.Types.ObjectId,
    //     ref: "Image"
    // },
    group: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group"
        }
    ],

}, { timestamps: true });

// userSchema.pre("save", function (next) {

//     console.log("user info");
//     // try {
//     //     if (!this.isModified("password")) return next();

//     //     const newPassword = await Password.create({ password: this.password }); // replace 'newPassword' with the actual password
//     //     this.password = newPassword._id;

//     //     next();
//     // } catch (error) {
//     //     next(error);
//     // }
//     // next();

// })

// userSchemas.plugin(aggregatePaginate);

userSchema.pre('save', async function (next) {
    console.log("khfdkshfjkb");
    // if (this.isModified('password')) {
    //   this.password = await bcrypt.hash(this.password, 12);
    // }
    // next();
});


const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
