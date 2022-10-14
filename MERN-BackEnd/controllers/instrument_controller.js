const router = require('express').Router()
const Instrument = require('../models/instruments')
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        let instruments = await Instrument.find()
        res.send(instruments)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive instruments' })
    }
})

router.post('/', async (req, res) => {
    try {
        const instrument = await new Instrument({
            ...req.body
        }).save()
        
        const existingUser = await User.findById(req.body.user)
        existingUser.instruments.push(instrument._id)
        let updatedUser = await User.findByIdAndUpdate(req.body.user, existingUser)

    
        res.send(instrument)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to save instrument' })
    }
})

module.exports = router