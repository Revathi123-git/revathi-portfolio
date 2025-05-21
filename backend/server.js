const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact'); // Use the route file

const app = express();

require('dotenv').config();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/contact', contactRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
