const mongoose = require('mongoose');
const { BD_NAME } = require('../constant');

async function bdConnect(params) {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${BD_NAME}`)
        console.log("Data base connect !! DB Host :", connectionInstance.connections[0].host);
    } catch (error) {
        throw error
    }

}


module.exports = { bdConnect }