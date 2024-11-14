const dbConnection = require('../core/database')
const encryptId = require('../utils/hash')

class User {
    constructor() {
        this.db = dbConnection
    }

    async create(id, userId, firstname, lastname, middlename, vehicleType, validty) {
        try {
            const results = await dbConnection.execute(
                'INSERT INTO users(id, userId, firstname, lastname, middlename, vehicleType, validty) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [encryptId(id, userId), userId, firstname, lastname, middlename, vehicleType, validty]
            )

            return results
        } catch(error) {
            console.error('[Create user]', error)
            throw error
        }
    }
}

module.exports = User