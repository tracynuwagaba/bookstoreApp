const mongoose = require('mongoose');
require('dotenv').config();
const { connectionString } = process.env;

// setup connection
module.exports = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('database connection successful');
        }
    });
};