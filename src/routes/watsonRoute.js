const express = require('express');
const router = express.Router();
const watsonController = require('../controllers/watsonController')

router.get('/getPhraseById', watsonController.getPhraseById);
router.get('/getPhrases', watsonController.getPhrase);
router.post('/addPhrases', watsonController.addPhrase);
router.post('/getSpeech', watsonController.getSpeech);

module.exports = router;