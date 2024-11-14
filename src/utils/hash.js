const crypto = require('crypto-js')

function encryptId(id, userId) {
    return crypto.HmacSHA256(id, userId).toString(crypto.enc.Hex)
}

module.exports = { encryptId }