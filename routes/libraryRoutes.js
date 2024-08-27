const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');


router.get('/libraries/:id', libraryController.userLibrary);
router.post('/libraries/:id', libraryController.addBookToLibrary);

module.exports = router;

