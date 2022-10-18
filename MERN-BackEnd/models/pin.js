const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
    },
    description: {
        type: String,
        require: true,
        min: 3,
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    lat:{
        type: Number,
        require: true
    },
    long:{
        type: Number,
        require: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('pin', pinSchema)