const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');

// Register a new user
const register = catchAsync( async (req, res, next) => {
  const { name, email } = req.body;
    const user = new User({ name, email});
    await user.save();
    res.json({ message: 'Registration successful' }); 
});

// Login with an existing user
const login = catchAsync( async (req, res, next) => {
  const { name, email } = req.body;

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.json({ token });
  
});

module.exports = { register, login };