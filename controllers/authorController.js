const Author = require('../models/Author');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');



exports.getAuthors = factory.getAll(Author);
exports.getAuthorById = factory.getOne(Author);
exports.createAuthor = factory.createOne(Author);
exports.updateAuthor = factory.updateOne(Author);
