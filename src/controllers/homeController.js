class HomeController {
    constructor() {
        this.__controllerName = 'Home'
    }

    indexAction(req, res) {
        res.json({
            'message': 'Welcome to RFID Parking System API',
            'controller': this.__controllerName
        })
        res.end()
    }
}

module.exports = HomeController