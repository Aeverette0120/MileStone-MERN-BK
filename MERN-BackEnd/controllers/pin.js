const router = require('express').Router()
const pin = require('../models/pin')
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        let pin = await pin.find()
        res.send(pin)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive pin' })
    }
})

router.post('/', async (req, res) => {
    try {
        const pin = await new pin({
            ...req.body
        }).save()
        
        const existingUser = await User.findById(req.body.user)
        existingUser.pin.push(pin._id)
        let updatedUser = await User.findByIdAndUpdate(req.body.user, existingUser)

    
        res.send(pin)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to save pin' })
    }
})

module.exports = router