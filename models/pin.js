const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
    

    title: {
        type: String,
        require: true,
    },
    imgURL: {
        Type: String,
        default:"https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    description: {
        type: String,
        required: true,
        min: 3,
    },
})

module.exports = mongoose.model('pin', pinSchema)