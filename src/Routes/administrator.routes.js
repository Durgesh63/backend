const { Router } = require('express');
const { register } = require('../controller/user/user.controllers');


const administratorrouter = Router()


administratorrouter.route("/register").post(register)


module.exports = administratorrouter