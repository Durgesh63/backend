const { CORS_ORIGINE } = require("../constant")

/**
 * Check CORS Options
 * @returns White list options
 */
function corsOptions() {
    const whitelist = CORS_ORIGINE
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