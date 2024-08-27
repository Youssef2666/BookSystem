const Genre = require('../models/Genre');

exports.createGenre = async (req, res) => {
    const genre = new Genre(req.body);
    try {
        await genre.save();
        res.status(201).send(genre);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getGenres = async (req, res) => { 
    try {
        const Genres = await Genre.find();
        res.send(Genres);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        res.send(genre);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(genre);
    } catch (error) {
        res.status(400).send(error);
    }
}
