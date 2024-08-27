const Book = require('../models/Book');
const User = require('../models/User');
const Author = require('../models/Author');
const Rate = require('../models/Rate');

exports.createBook = async (req, res) => {
    try {
        const { title, description, author_id, tags, genres } = req.body;

        const findAuthor = await Author.findById({ _id: author_id });
        if (!findAuthor) {
            res.status(404).json({ message: 'Author not found' });
        }
        // Create a new Book
        const newBook = new Book({
            title, 
            description, 
            tags,
            genres,
            author_id: findAuthor._id,
        });
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create Book', error });
    }
};



exports.getBooks = async (req, res) => {
    try {
        const Books = await Book.find();
        res.status(200).json(Books);
    } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve Books', error });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const findBook = await Book.findById({ _id: req.params.id });
        if (findBook) {
            res.status(200).json(findBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve Book', error });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (updatedBook) {
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update Book', error });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({_id: req.params.id});
        if(deletedBook){
            await User.updateOne(
                { _id: deletedBook.user },
                { $pull: { Books: deletedBook._id } }
            )
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete Book', error });
    }
};

exports.calculateRate = async (req, res) => {
    try {
        const bookId = req.params.id;

        // Find all ratings associated with the specific book
        const ratings = await Rate.find({ book_id: bookId });

        if (ratings.length === 0) {
            return res.status(404).json({ message: 'No ratings found for this book' });
        }

        // Calculate the average rating
        const totalRate = ratings.reduce((sum, rate) => sum + rate.value, 0);
        const averageRate = totalRate / ratings.length;

        res.status(200).json({ averageRate });
    } catch (error) {
        res.status(400).json({ message: 'Failed to calculate average rate', error });
    }
};