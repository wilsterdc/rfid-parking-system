const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { serialport } = require('./arduino/index')
// const { serial } = require('./core/serialport')
require('./core/database')
require('dotenv').config()


const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', cors(), routes)
serialport()

app.listen(port, () => {
    console.log(`Running at localhost:${port}`)
})