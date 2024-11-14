const crypto = require('crypto')

module.exports = function encryptId(id, userId) {
    return createHmac('sha256', userId)
    .update(id)
    .digest('hex')
}