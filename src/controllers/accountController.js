const User = require('../models/user')

class AccountController {
    constructor() {
        this.user = new User()
    }

    async create(req, res) {
        // Add arduino module for passing the id from arduino
        const { id, userId, firstname, lastname, middlename, vehicleType, validity } = req.body || {}

        try {
            const response = await this.user.create(id, userId, firstname, lastname, middlename, vehicleType, validity)

            res.json({
                success: true,
                data: {
                    recordIndex: response?.insertId
                }
            })
            
            res.end()
        } catch(error) {
            res.json({
                success: false,
                message: error.toString()
            })

            res.end()
        }
    }
    
    async parkIn(req, res) {
        const { uid, userId } = req.query || {}
        
        try {
            const response = await this.user.parkIn(uid, userId)
            
            res.json({
                success: true,
                data: {
                    "id": response[0][0].id
                }
            })

            res.end()
        } catch (error) {
            res.json({
                success: false,
                message: error.toString()
            })
        
            res.end()
        }
    }
}

module.exports = AccountController