const axios = require('axios')

async function parking(userId) {
    const response = await axios.get('http://localhost:3000/account/parking', {
        params: {
            userId: `${userId}`
        }
    })

    if (!response.data.success) {
        console.log(response.data.message)
    }

    // if (response.data.success) {
    //     console.log(response.data.data)
    // }

    console.log('[RFID]', response.data)
}

module.exports = { parking }