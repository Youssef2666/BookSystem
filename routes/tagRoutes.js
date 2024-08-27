const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.get('/tags', tagController.getTags);
router.get('/tags/:id', tagController.getTagById);
router.post('/tags', tagController.createTag);
router.patch('/tags/:id', tagController.updateTag);


module.exports = router