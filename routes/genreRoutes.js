const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/genres', genreController.getGenres);
router.get('/genres/:id', genreController.getGenreById);
router.post('/genres', genreController.createGenre);
router.patch('/genres/:id', genreController.updateGenre);


module.exports = router