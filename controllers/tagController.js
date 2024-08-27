const Tag = require('../models/Tag');

exports.createTag = async (req, res) => {
    const tag = new Tag(req.body);
    try {
        await tag.save();
        res.status(201).send(tag);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getTags = async (req, res) => { 
    try {
        const tags = await Tag.find();
        res.send(tags);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getTagById = async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id);
        res.send(tag);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.updateTag = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(tag);
    } catch (error) {
        res.status(400).send(error);
    }
}
