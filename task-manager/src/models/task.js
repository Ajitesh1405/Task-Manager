const mongoose = require('mongoose')
const validator = require('validator')


const Task = mongoose.model('Task', {
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = Task