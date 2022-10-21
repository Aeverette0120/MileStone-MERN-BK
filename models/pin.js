const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
    

    title: {
        type: String,
        require: true,
    },
    imgURL: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        min: 3,
    },
})

module.exports = mongoose.model('pin', pinSchema)