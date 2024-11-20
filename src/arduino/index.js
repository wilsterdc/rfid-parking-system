const { serial } = require('../core/serialport')
const ArduinoRoutes = require('./requestRoutes')

const routes = new ArduinoRoutes

function serialport() {

    serial().on('data', async (data) => {
        try {
            data = data.toString().trim()
            // console.log(data)
            routes.userId(data)

        } catch (error) {
            console.error('[READING RFID]', error)
            id = null
            userId = null
        }
        
    })
}

module.exports = { serialport }