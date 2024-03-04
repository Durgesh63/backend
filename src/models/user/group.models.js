const mongoose = require('mongoose');

const gropSchema = new mongoose.Schema({
    groupName: {
        type: String,
        unique: [true, 'Group already exists'],
        required: [true, 'Please provide a name for the group']
    },
    permissions: [{
        type: String,
        enum: ['read', 'write', 'delete', 'update', 'download', null],
        unique: [true, "Permissions must be unique"],
        required: [true, 'Permission is required']
    }]
}, { timestamps: true })


const Group = mongoose.model("Group", gropSchema)

module.exports = { Group }