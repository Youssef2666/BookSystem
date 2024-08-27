const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', 
    },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Tag',
    },
    genres: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Genre',
        required: true,
    },
    rates: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Rate',
    },
});
const Book = mongoose.model('Book', BookSchema)
module.exports = Book