const Author = require('../models/Author');
const catchAsync = require('../utils/catchAsync');



exports.getAuthors = catchAsync( async (req, res) => {
        const authors = await Author.find();
        res.status(200).json(authors);
});


exports.getAuthorById = async (req, res) => {
        const author = await Author.findById({_id: req.params.id});
        if (author) {
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
}


exports.createAuthor = async (req, res) => {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).json(newAuthor);
}

exports.updateAuthor = async (req, res) => {
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
}
