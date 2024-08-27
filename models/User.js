const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
const User = mongoose.model('User', userSchema)
module.exports = User