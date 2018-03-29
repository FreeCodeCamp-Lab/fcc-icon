const express = require('express');


const IconController = require('../controllers/icon');

const router = express.Router();

router.get('/:group/:project', IconController.Icon);

module.exports = router;