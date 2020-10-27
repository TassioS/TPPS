const express = require('express');
const router = express.Router();
const watsonController = require('../controllers/watsonController')

router.get('/getPhrases', watsonController.getPhrase);
router.post('/addPhrases', watsonController.addPhrase);

module.exports = router;