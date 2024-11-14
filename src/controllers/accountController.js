const User = require('../models/user')

class AccountController {
    constructor() {
        this.user = new User()
    }

    async create(req, res) {
        const { id, userId, firstname, lastname, middlename, vehicleType, validty } = req.body || {}

        try {
            const response = await this.user.create(id, userId, firstname, lastname, middlename, vehicleType, validty)

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
}

module.exports = AccountController