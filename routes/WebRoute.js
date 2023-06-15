const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/WebController')

router.get('/', getAll);

module.exports = router;
