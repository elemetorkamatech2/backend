const express = require('express');

const router = express.Router();
const { getAll } = require('../controller/UserController');
const { getAllWebsites } = require('../controller/UserController');


router.get('/getAll', getAll);
router.get('/getAllWebsites', getAllWebsites);
module.exports = router;
