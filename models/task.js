const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({

    taskname: {
        type: String,
        required: true
    },
    taskdescription: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }

})

module.exports = mongoose.model('task',taskSchema)