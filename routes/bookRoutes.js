const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/books', bookController.createBook);
router.get('/books', bookController.getBooks);
router.get('/books/filter', bookController.getBooksByFilter);

router.get('/books/:id', bookController.getBookById);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);
router.get('/books/:id/average-rate', bookController.calculateRate);

module.exports = router;
