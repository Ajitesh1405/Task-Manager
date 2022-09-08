const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express() // constructor for express
const port = process.env.PORT || 3000

app.use(express.json()) //its a json parser when response comes it convet it into json data


// to create user

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// to get users

app.get('/users', (req, res) => {
    User.find({}).then((user) => {
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })

})

//to get user by id

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

//to create task

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// to get task

app.get('/tasks', (req, res) => {
    Task.find({}).then((task) => {
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })

})

//to get task by id

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.listen(port, () => {
    console.log('server is upon port', port) //to listen on port
})