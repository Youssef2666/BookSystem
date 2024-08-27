const Rate = require('../models/Rate');
const Book = require('../models/Book');

exports.createRate = async (req, res) => {
    try {
        // Create a new Rate instance with the request body
        const newRate = new Rate(req.body);

        // Save the new Rate to the database
        await newRate.save();

        // Find the book by the book_id in the new Rate
        const findBook = await Book.findById(newRate.book_id);
        console.log(findBook)
        if (!findBook) {
            return res.status(404).send({ message: 'Book not found' });
        }
        
        // Add the Rate's ID to the Book's rates array
        console.log(newRate._id)
        findBook.rates.push(newRate._id);
        await findBook.save();

        // Send the new Rate as the response
        res.status(201).send(newRate);
    } catch (error) {
        // Logging the error to see what it contains
        console.error('Error occurred:', error);
        res.status(400).send({ message: 'Failed to create rate', error });
    }
};





exports.getRates = async (req, res) => { 
    try {
        const Rates = await Rate.find();
        res.send(Rates);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getRateById = async (req, res) => {
    try {
        const findRate = await Rate.findById(req.params.id);
        res.send(findRate);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.updateRate = async (req, res) => {
    try {
        const findRate = await Rate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(findRate);
    } catch (error) {
        res.status(400).send(error);
    }
}

// exports.calculateRate = async (req, res) => {
//     try {
//         const findRate = await Rate.findById(req.params.id);
//         res.send(findRate);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

exports.deleteRate = async (req, res) => {
    try {
        const findRate = await Rate.findByIdAndDelete(req.params.id);
        res.send("Rate deleted successfully");
    } catch (error) {
        res.status(400).send(error);
    }
}