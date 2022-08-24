const { handleGetMessage } = require('../controllers/messages')
const router = require('express').Router()

router.get('/', handleGetMessage)

module.exports = router