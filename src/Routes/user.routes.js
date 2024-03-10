const { Router } = require('express');
const { register } = require('../controller/user/user.controllers');
const Upload = require('../middleware/multer.middleware');

const userrouter = Router()


userrouter.route("/register").post(
    Upload.fields([{
        name: "avatar",
        maxCount: 1
    }])
    , register)

module.exports = userrouter