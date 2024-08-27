const Author = require('../models/Author');



exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get Authors', error });
    }
}


exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById({_id: req.params.id});
        if (author) {
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to get Author', error });
    }
}


exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create Author', error });
    }
}

exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (updatedAuthor) {
            res.status(200).json(updatedAuthor);
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update Author', error });
    }
}
