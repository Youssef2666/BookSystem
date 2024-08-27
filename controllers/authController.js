const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a new user
const register = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const user = new User({ name, email});
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };