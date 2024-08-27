const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();  // Ensure .env is loaded before using environment variables
const app = express();
app.use(express.json());

connectDB();

app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/bookRoutes'));
app.use('/api', require('./routes/libraryRoutes'));
app.use('/api', require('./routes/authorRoutes'));
app.use('/api', require('./routes/tagRoutes'));
app.use('/api', require('./routes/genreRoutes'));
app.use('/api', require('./routes/rateRoutes'));
app.use('/api', require('./routes/authRoutes'));

module.exports = app;
