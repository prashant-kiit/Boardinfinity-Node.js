const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Model = require('../models/task')



router.get('/list', async(req,res) => {
    try{
           const allTasks = await Model.find()
           res.json(allTasks)
    }catch(err){
        res.send('Error ' + err)
    }
})




router.post('/add', async(req,res) => {
    const work = new Model({
        taskname: req.body.taskname,
        taskdescription: req.body.taskdescription,
        creator: req.body.creator,
        duration: req.body.duration,
        createdAt: req.body.createdAt
    })

    try{
        const a1 =  await work.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router