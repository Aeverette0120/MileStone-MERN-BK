const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['']
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('pin', pinSchema)