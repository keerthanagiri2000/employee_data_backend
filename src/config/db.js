require('dotenv').config();
const mongoose = require("mongoose");


const uri = process.env.MONGO_URI;

const connectToDatabase = () => {
    mongoose.connect(uri)
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log(error));
}

module.exports = { connectToDatabase };