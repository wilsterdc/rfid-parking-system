const { connect } = require('../core/database')
const { encryptId } = require('../utils/hash')

class User {
    constructor() {
        this.db = connect
    }

    async create(id, userId, firstname, lastname, middlename, vehicleType, validity) {
        try {
            console.log(encryptId(id, userId), firstname, lastname, middlename, vehicleType, validity)
            const connection = await connect()

            if(!connection) {
                throw new Error('Failed to establish a connection.')
            }

            const [results] = await connection.execute(
                'INSERT INTO users(id, userId, firstname, lastname, middlename, vehicleType, validity) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [encryptId(id, userId), userId, firstname, lastname, middlename, vehicleType, validity]
            )

            return results
        } catch(error) {
            console.error('[Create user]', error)
            throw error
        }
    }
}
module.exports = User