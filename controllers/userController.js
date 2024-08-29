const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');


exports.createUser = factory.createOne(User);



exports.getUsers = factory.getAll(User);
exports.getUserById = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
exports.filterUsers = factory.getByFilter(User);
exports.getProfile = catchAsync( async (req, res) => {
    res.json({ message: `Welcome ${req.user.name}` });
});



