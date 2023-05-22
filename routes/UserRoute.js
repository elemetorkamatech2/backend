const express = require('express')
const router = express.Router()
const {getAll} = require('../controller/UserController')

//routing
router.get('/getAll', getAll)

module.exports = router