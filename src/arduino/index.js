const { serial } = require('../core/serialport')
const { arduinoRequests } = require('./requestRoutes')


function serialport() {
    serial().on('data', (data) => {
        
        const dataCollection = []
        dataCollection.push(data.toString().trim())
        console.log(dataCollection)
    })
}

module.exports = { serialport }