require('dotenv').config();
const mongoDB = require("./src/config/db");
const express = require("express");
const app = express();
const customRoutes = require("./src/routes/index.router");
const cors = require('cors');



app.use(express.json());

// MongoDB Database connection
mongoDB.connectToDatabase();

// Use CORS Middleware
const whitelist = ['http://localhost:3000','http://localhost:3001'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback( new Error('Not allowed by CORS'));
        }
    }
}
app.use(cors(corsOptions));

// Global Error Handling
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong')
});

// Routes
app.use("/api", customRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
