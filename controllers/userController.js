const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUser = catchAsync( async (req, res) => {
        const { name, email } = req.body;
        // Create a new user
        const newUser = new User({ name, email });
        await newUser.save(); 

        res.status(201).json(newUser);
});



exports.getUsers = catchAsync( async (req, res) => {
        const Users = await User.find();
        res.status(200).json(Users);
});

exports.getUserById = catchAsync( async (req, res) => {
        const findUser = await User.findOne({ _id: req.params.id });
        if (findUser) {
            res.status(200).json(findUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
});

exports.updateUser = catchAsync( async (req, res) => {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
});

exports.deleteUser = catchAsync( async (req, res) => {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
});

exports.getProfile = catchAsync( async (req, res) => {
    res.json({ message: `Welcome ${req.user.name}` });
});

