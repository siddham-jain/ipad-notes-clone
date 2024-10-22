require('dotenv').config();

const constants = {
    SERVER_URL: 'localhost',
    PORT: '8900',
    ENV: 'dev',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
};

module.exports = constants;