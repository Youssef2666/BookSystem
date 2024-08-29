const Genre = require('../models/Genre');
const factory = require('./handlerFactory');



exports.createGenre = factory.createOne(Genre);
exports.getGenres = factory.getAll(Genre);

exports.getGenreById = factory.createOne(Genre);

exports.updateGenre = factory.updateOne(Genre);
