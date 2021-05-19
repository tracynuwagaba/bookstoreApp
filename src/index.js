const express = require('express');
const app = express();

// port
require('dotenv').config();
const port = process.env.PORT || 8000;

// connect to database
const db = require('./database/db');
db();

// middleware
app.use(express.json());

// basic route
app.get('/', (req, res) => res.json({
    message: 'Welcome to the bookstore!'
}));

// listen to our connection
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});