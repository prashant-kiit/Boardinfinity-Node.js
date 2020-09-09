const mongoose = require('mongoose');

const URI = 'mongodb+srv://prashant:prashant@cluster0.km4yt.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async()=> {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('DB connected successfully...');
};


module.exports = connectDB;