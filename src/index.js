const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { receiveSerialport } = require('./arduino/index')
require('./core/database')
require('dotenv').config()


const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 3000

// receiveSerialport()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', cors(), routes)

app.listen(port, () => {
    console.log(`Running at localhost:${port}`)
})