const { connect } = require('../core/database')
const { encryptId } = require('../utils/hash')

class User {
    constructor() {
        this.db = connect
    }

    async create(id, userId, firstname, lastname, middlename, vehicleType, validity) {
        try {
            // console.log(encryptId(id, userId), firstname, lastname, middlename, vehicleType, validity)
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

    async parking(uid, userId) {
        try {
            const connection = await connect()
            
            if (!connection) {
                throw new Error('Failed to establish a connection.')
            }
            
            const authenticate = await connection.execute(
                `SELECT id, vehicleType FROM users WHERE userId = '${userId}'`
            )

            // console.log(authenticate[0][0].vehicleType)
            const vehicleType = authenticate[0][0].vehicleType
            // console.log(vehicleType.toLowerCase())

            if (authenticate[0][0] === undefined) {
                console.log('User does not exist.')
                throw 'User does not exist.'
            }

            const userParkedIn = await connection.execute(
                `SELECT COUNT(*) FROM logs WHERE userId = '${userId}' AND entryDate = CURRENT_DATE()`
            )

            const value = Object.values(userParkedIn[0][0])
            // console.log(value[0])

            if (value[0] <= 0) {
                const [result] = await connection.execute(
                    `INSERT INTO logs(userId) VALUES(?)`,
                    [userId]
                )

                await connection.execute(
                    `UPDATE parkingSlots SET occupied = occupied + 1 WHERE vehicleType = '${vehicleType.toLowerCase()}'`
                )

                return result
            } else {
                const [result] = await connection.execute(
                    `UPDATE logs SET exitTime = CURRENT_TIME() WHERE userId = '${userId}'`
                )
               
                await connection.execute(
                    `UPDATE parkingSlots SET occupied = occupied - 1 WHERE vehicleType = '${vehicleType.toLowerCase()}'`
                )
                
                return result
            }
            
            // console.log(result.insertId)
            // return authenticate
        } catch (error) {
            console.error('[Parking]', error)
            throw error
        }
    }
}
module.exports = User