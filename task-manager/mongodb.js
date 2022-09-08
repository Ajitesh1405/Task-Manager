//CRUD operations in mongoDB

const { MongoClient, ObjectId, Db } = require('mongodb')

const connectionUrl = 'mongodb+srv://Ajitesh14:Ajitesh%401234@manager.cdkldyj.mongodb.net/test'  //'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable')

    }

    const db = client.db(databaseName)

    //to insert documents

    // db.collection('users').insertMany([{
    //     name: 'anjali',
    //     age: 24
    // }, {
    //     name: 'Ajitesh',
    //     age: 25
    // }, {
    //     name: 'Ojasvi',
    //     age: 25
    // }])

    //to find documents

    // db.collection('tasks').findOne({ _id: new ObjectId("631789f348363bc2e23682d2") }, (error, user) => {
    //     if (error) {
    //         return console.log('user not found')
    //     }
    //     console.log(user)
    // })
    // db.collection('tasks').find({ status: false }).toArray((error, users) => { //find is a cursor not array and does not have callback
    //     console.log(users)
    // })

    //to update the document

    // db.collection('users').updateOne({
    //     _id: new ObjectId('6318d320d7770ae4d6422474')
    // }, {
    //     $set: {
    //         name: 'Anjali Chopra'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     status: false
    // }, {
    //     $set: {
    //         status: true
    //     }
    // })

    // to delete documents
    // many docs
    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     desc: 'clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})