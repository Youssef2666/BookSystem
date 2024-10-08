const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const userController = require('../controllers/userController');


router.get('/users/profile', authenticate, userController.getProfile);
router.post('/users',userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/filter',userController.filterUsers);
router.get('/users/:id', userController.getUserById);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
