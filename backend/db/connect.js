const mongoose = require('mongoose')

const connectDB = (url) => {

    console.log("Connecting MongoDB")
    return mongoose.connect(url)

}

module.exports = connectDB
