const { Router } = require('express')
const homeRouter = require('./homeRoutes')
const accountRouter = require('./accountRoutes')

const router = new Router()

router.use('/', homeRouter)
router.use('/account', accountRouter)

module.exports = router