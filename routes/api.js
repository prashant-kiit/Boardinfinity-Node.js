const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Model = require('../models/task')

router.get('/', async(req,res) => {
    try{
           const allTasks = await Model.find()
           res.json(allTasks)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const oneTask = await Model.findById(req.params.id)
           res.json(oneTask)
    }catch(err){
        res.send('Error ' + err)
    }
})




router.post('/', async(req,res) => {
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

router.patch('/:id',async(req,res)=> {
    try{
        const oneTask = await Model.findById(req.params.id)
        oneTask.taskname = req.body.taskname
        const a1 = await oneTask.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

    router.delete('/:id',async(req,res)=> {
        try{
            const oneTask = await Model.findById(req.params.id)
            oneTask.taskname = req.body.taskname
            const a1 = await oneTask.remove()
            res.json(a1)   
        }catch(err){
            res.send('Error')
        }
    
})

module.exports = router