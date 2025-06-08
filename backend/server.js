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

// PORT should be from Render
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Backend running on port ${PORT}`)))
  .catch((err) => console.error("MongoDB connection failed:", err));
