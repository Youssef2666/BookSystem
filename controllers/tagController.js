const Tag = require('../models/Tag');
const factory = require('./handlerFactory');


exports.createTag = factory.createOne(Tag);
exports.getTags = factory.getAll(Tag);
exports.getTagById = factory.getOne(Tag);
exports.updateTag = factory.updateOne(Tag);
