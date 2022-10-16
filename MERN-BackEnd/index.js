const express = require('express')
const mongoose = require('mongoose')
<<<<<<< HEAD
const userRoutes = require('./controllers/user')
const pinRoutes = require('./controllers/pin')
=======
// const userRoutes = require('./controllers/user')
const pinRoutes = require('./routes/pin')

>>>>>>> 0aef4d3 (got pin route going)
require('dotenv').config()

const app = express()

// middleware
app.use(express.json())

// routes
<<<<<<< HEAD
app.use('/user', userRoutes)
app.use('/instrument', intrumentRoutes)
=======
// app.use('/user', userRoutes)
app.use('/pin', pinRoutes)
>>>>>>> 0aef4d3 (got pin route going)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))