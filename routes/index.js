const express = require('express');


const IconController = require('../controllers/icon');

const router = express.Router();

router.get('/', IconController.Icon);

module.exports = router;