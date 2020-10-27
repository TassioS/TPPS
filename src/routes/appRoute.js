const express = require('express');
const router = express.Router();
const controller = require('../controllers/appController')

router.get('/getPhrases', controller.get);
router.post('/addPhrases', controller.post);

module.exports = router;