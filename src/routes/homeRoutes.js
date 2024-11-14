const { Router } = require('express')
const HomeController = require('../controllers/homeController')

const router = new Router()
const home = new HomeController()

router.get('/', home.indexAction.bind(home))

module.exports = router