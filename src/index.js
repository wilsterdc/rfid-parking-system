const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./core/database')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use('/', (req, res) => {
    res.send('Hello')
})

// connectDB.connect()
console.log(process.env.DB_USER)

app.listen(port, () => {
    console.log(`Running at localhost:${port}`)
})