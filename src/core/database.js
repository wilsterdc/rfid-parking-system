const mysql = require('mysql2/promise')

async function connect() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE,
            port: process.env.DB_PORT || 4406
        })

        console.log('Connected to the database.')
        return connection
    } catch(error) {
        console.error(error)
    }
}


module.exports = { connect }