const User = require('../models/User');


exports.userLibrary = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).populate('books');
        if (user) {
            res.status(200).json(user.books);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve library', error });
    }
}

exports.addBookToLibrary = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (user) {
            await User.updateOne(
                { _id: req.params.id },
                { $push: { books: req.body.books } } 
            );
            res.status(200).json({ message: `Book(s) added to ${user.name} successfully` });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to add book', error });
    }
}
