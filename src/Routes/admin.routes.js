const { Router } = require('express');
const { register } = require('../controller/user/user.controllers');


const adminrouter = Router()


adminrouter.route("/register").post(register)

module.exports = adminrouter