const router = require('express').Router();
const { Router } = require('express');
const Pin = require('../models/pin');

//create a pin

router.post("/", async (req,res)=>{
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err)
    }
})

//get a single pin

router.get("/:id", async (req,res)=>{
    try{
        const pin = await Pin.findById();
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})


//get all pins

router.get("/", async (req,res)=>{
    try{
        const pin = await Pin.find();
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//delete a pin

router.delete("/:id", async (req,res)=>{
    try{
        const pin = await Pin.findOneAndDelete();
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//update pin

router.patch("/:id", async (req,res)=>{
    try{
        const pin = await Pin.findByIdAndUpdate();
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})


module.exports = router