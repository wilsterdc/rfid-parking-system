const axios = require('axios')

async function parking(userId) {
    const response = await axios.get('http://localhost:3000/account/parking', {
        params: {
            userId: `${userId}`
        }
    })

    console.log('[RFID]', response.data.success)
}

module.exports = { parking }