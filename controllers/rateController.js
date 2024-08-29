const Rate = require('../models/Rate');
const Book = require('../models/Book');
const factory = require('./handlerFactory');


exports.createRate = factory.createOne(Rate);
exports.getRates = factory.getAll(Rate);
exports.getRateById = factory.getOne(Rate);
exports.updateRate = factory.updateOne(Rate);
exports.deleteRate = factory.deleteOne(Rate)

