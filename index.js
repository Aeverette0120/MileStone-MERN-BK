const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const pinRoutes = require('./routes/pin')
require('dotenv').config()

const app = express()

// middleware
app.use(express.json())
app.use(cors())
// routes

app.use('/pin', pinRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))