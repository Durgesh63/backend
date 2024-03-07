require('dotenv').config()
const { app } = require('./src/app.js')
const { bdConnect } = require("./src/db/db.connection.js")
// app()

bdConnect()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is running at PORT: ${process.env.PORT}`);
        })
    }).catch((error) => {
        throw error
    })