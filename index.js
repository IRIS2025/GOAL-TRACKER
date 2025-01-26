const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Goal Tracker API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const goalRoutes = require('./routes/goalRoutes');

app.use('/api/goals', goalRoutes);

const connectDB = require('./config/db');
connectDB();


