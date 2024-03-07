const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { corsOptions } = require('./utils/utils');

const app = express()

app.use(cors(corsOptions()))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));  // support encoded bodies

app.use(express.static("public")) // serve static file
app.use(cookieParser())

// Routes




module.exports = { app }