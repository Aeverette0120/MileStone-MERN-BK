const router = require('express').Router();
const pin = require('../models/pin');

//create a pin

router.post("/", async (req,res)=>{
    const newPin = new pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err)
    }
})

//get all pins

router.get("/", async (req,res)=>{
    try{
        const pin = await pin.find();
        res.status(200).json(pin);
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router