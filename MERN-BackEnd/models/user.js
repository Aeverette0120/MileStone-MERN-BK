const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
    },
    pins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'pin'
        }
    ]
}, {
    timestamps: true,
})


module.exports = mongoose.model('User', userSchema)