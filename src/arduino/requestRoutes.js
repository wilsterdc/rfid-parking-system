const { parking } = require('./arduino')

class ArduinoRoutes {
    
    method(req) {
        console.log('Method:', req)
    }

    id(id) {
        console.log('ID:', id)
    }

    userId(userId) {
        parking(userId)
    }
}

module.exports = ArduinoRoutes