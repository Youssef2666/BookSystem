const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/authors', authorController.getAuthors);
router.get('/authors/:id', authorController.getAuthorById);
router.post('/authors', authorController.createAuthor);
router.patch('/authors/:id', authorController.updateAuthor);


module.exports = router