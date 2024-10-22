const express = require('express');
const cors = require('cors');
const { SERVER_URL, PORT, ENV } = require('./constants');
require('dotenv').config();
const calculatorRouter = require('./src/routes/calculator');

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
});

// Routes
app.use('/calculate', calculatorRouter);

// Constants from .env
// const SERVER_URL = process.env.SERVER_URL || 'localhost';
// const PORT = process.env.PORT || 3000;
// const ENV = process.env.NODE_ENV || 'development';

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
        status: "error"
    });
});

// Start server
app.listen(PORT, SERVER_URL, () => {
    console.log(`Server is running on http://${SERVER_URL}:${PORT}`);
    console.log(`Environment: ${ENV}`);
});

module.exports = app;