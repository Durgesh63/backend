const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { corsOptions } = require('./utils/utils');

const app = express()
/**
 * CORS
 */
app.use(cors(corsOptions()))

/**
 * Requset body  parsing middleware should be above any other middleware that needs to access the request body.
 */
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));  // support encoded bodies

/**
 * Serve static  files from the `public` folder.
 * https://expressjs.com/en/starter/static-files.html
 */
app.use(express.static("public"));

/**
 * cookie parser
 */
app.use(cookieParser())

/**
 * Routes definations 
 */




module.exports = { app }