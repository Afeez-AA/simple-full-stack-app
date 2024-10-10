require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors'); // Import cors
const { Pool } = require('pg');
const path = require('path');

const app = express();

// Use CORS to allow the frontend to connect
app.use(cors({
  origin: process.env.FRONTEND_URL // Replace with your frontend URL
}));

// Serve static files (frontend HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up PostgreSQL connection using pg Pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// API endpoint to check PostgreSQL connection
app.get('/api/db-status', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'PostgreSQL connected successfully', time: result.rows[0].now });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ status: 'Error connecting to the database' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
