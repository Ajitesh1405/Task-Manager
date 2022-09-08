const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { // here to create new mongoose db use / after the db connection string
    useNewUrlParser: true,

})

// no need for below as model shifted to models.

// //creating model

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('email is not valid')
//             }
//         }

//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('age cannot be a negative number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 6,
//         validate(value) {
//             if (value === 'Password') { //or can also user if(value.toLowerCase().includes('Password'))
//                 throw new Error('password cannot contain string password')
//             }
//         }
//     }
// })

// //Creating Instnce for model for User db

// const me = new User({
//     name: '  Ajitesh  ',
//     age: 25,
//     email: '   ajitesh@gmail.com  ',
//     password: 'Ajitesh'
// })

// const one = new User({
//     name: '  Ajitesh  ',
//     age: 25,
//     email: '   ajitesh@gmail.com  ',
//     password: 'sword'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// one.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })


// Creating new model for task

// const Task = mongoose.model('Task', {
//     desc: {
//         type: String
//     },
//     status: {
//         type: Boolean
//     }
// })

// const newTask = new Task({
//     desc: 'go to market',
//     status: true
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log(error)
// })

