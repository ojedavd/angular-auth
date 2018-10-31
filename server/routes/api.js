const express = require('express')
const router = express.Router()

const mongosee = require('mongoose')
const db = "mongodb://ojedavd:2ud2tf6c@ds125716.mlab.com:25716/eventsdb"

mongosee.connect(db, err => {
    if(err){
        console.log('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router