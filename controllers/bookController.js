const Book = require('../models/Book');
const User = require('../models/User');
const Author = require('../models/Author');
const Rate = require('../models/Rate');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getBooks = factory.getAll(Book);
exports.createBook = factory.createOne(Book);
exports.getBookById = factory.getOne(Book);
exports.updateBook = factory.updateOne(Book);
exports.deleteBook = factory.deleteOne(Book);
exports.getBooksByFilter = factory.getByFilter(Book);

// exports.getBooks = catchAsync( async (req, res, next) => {
//         const Books = await Book.find();
//         res.status(200).json(Books);
//     }
// );



// exports.createBook = catchAsync( async (req, res) => {
//         const { title, description, author_id, tags, genres } = req.body;

//         const findAuthor = await Author.findById({ _id: author_id });
//         if (!findAuthor) {
//             res.status(404).json({ message: 'Author not found' });
//         }
//         // Create a new Book
//         const newBook = new Book({
//             title, 
//             description, 
//             tags,
//             genres,
//             author_id: findAuthor._id,
//         });
//         await newBook.save();
//         res.status(201).json(newBook);
// });




// exports.getBookById = catchAsync(async (req, res) => {
//         const findBook = await Book.findById({ _id: req.params.id });
//         res.status(200).json(findBook);
//         if (findBook) {
//         } else {
//             res.status(404).json({ message: 'Book not found' });
//         }
// });

// exports.updateBook = catchAsync( async (req, res) => {
//         const updatedBook = await Book.findOneAndUpdate(
//             { _id: req.params.id },
//             { $set: req.body },
//             { new: true }
//         );
//         if (updatedBook) {
//             res.status(200).json(updatedBook);
//         } else {
//             res.status(404).json({ message: 'Book not found' });
//         }
// });

// exports.deleteBook =catchAsync( async (req, res) => {
//         const deletedBook = await Book.findOneAndDelete({_id: req.params.id});
//         if(deletedBook){
//             await User.updateOne(
//                 { _id: deletedBook.user },
//                 { $pull: { Books: deletedBook._id } }
//             )
//             res.status(200).json({ message: 'Book deleted successfully' });
//         } else {
//             res.status(404).json({ message: 'Book not found' });
//         }
// });

exports.calculateRate = catchAsync( async (req, res) => {
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
});





// exports.getBooksByFilter = catchAsync(async (req, res, next) => {
//   let query = Book.find(req.query);
//   const books = await query.exec();
//   res.status(200).json({
//     status: 'success',
//     results: books.length,
//     data: {
//       books: books,
//     },
//   });
// });
  

