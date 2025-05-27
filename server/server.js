const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const route = require('./routes/authRoute');
const PORT = process.env.PORT || 5000;

const app = express();

console.log("MONGO_URL:", process.env.MONGO_URL); 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected!"))
.catch((e) => console.log("MongoDB Connection Error:", e));

app.use(express.json())
app.use(express.urlencoded())

const allowedOrigins = [
  'http://localhost:3000',
  'https://think-fashion.vercel.app'
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      // if the origin isn't in the list of allowed origins, respond with an error
      return callback(new Error('Not allowed by CORS'));
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use('/', route);


app.listen(PORT, () => console.log("Server Started!"));