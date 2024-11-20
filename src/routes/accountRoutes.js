const { Router } = require('express')
const AccountController = require('../controllers/accountController')

const router = new Router
const account = new AccountController

router.post('/', account.create.bind(account))
router.get('/parking', account.parking.bind(account))

module.exports = router