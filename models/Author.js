const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Book', 
    }
});
const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author