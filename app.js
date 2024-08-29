
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();  // Ensure .env is loaded before using environment variables
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json());
// app.use(express.static(path.j))

connectDB();

// Routes
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/bookRoutes'));
app.use('/api', require('./routes/libraryRoutes'));
app.use('/api', require('./routes/authorRoutes'));
app.use('/api', require('./routes/tagRoutes'));
app.use('/api', require('./routes/genreRoutes'));
app.use('/api', require('./routes/rateRoutes'));
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/uploadRoutes'));

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
