const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const userController = require('../controllers/userController');

router.post('/users',userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/profile', authenticate, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}` });
  });

module.exports = router;
