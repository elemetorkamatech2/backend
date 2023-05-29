const express = require('express');

const router = express.Router();
const { getAll } = require('../controller/UserController');

router.get('/getAll', getAll);
module.exports = router;
