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
    
    async parking(req, res) {
        const { uid, userId } = req.query || {}
        
        try {
            const response = await this.user.parking(uid, userId)
            console.log(response.insertId)

            if (response.insertId >= 1) {
                res.json({
                success: true,
                data: {
                    "id": response?.insertId,
                    "message": "Park-in"
                    }
                })
            } else {
                res.json({
                success: true,
                data: {
                    "message": "Park-out"
                    }
                })
            }
            
            

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