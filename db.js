const mongoose = require('mongoose')

// Define the MongoDb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

// Define event listener fot database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
})

db.on('error', () => {
    console.log('MongoDB connection error');
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

module.exports = db;






