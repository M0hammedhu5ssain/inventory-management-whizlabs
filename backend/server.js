const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require('./routes/itemRoutes');
app.use('/items', itemRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Backend running on port 5000")))
  .catch((err) => console.error("MongoDB connection failed:", err));
