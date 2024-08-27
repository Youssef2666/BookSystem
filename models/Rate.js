const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', 
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
});
const Rate = mongoose.model('Rate', RateSchema)
module.exports = Rate