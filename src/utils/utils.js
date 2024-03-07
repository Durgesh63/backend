function corsOptions(params) {
    const whitelist = process.env.CORS_ORIGINE
    return {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    }
}



module.exports = {
    corsOptions
}