const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// DB Setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',     // <-- your password here
  database: 'farm_connect' // <-- make sure this DB exists in MySQL!
});

// Connect DB
db.connect((err) => {
  if (err) {
    console.error('❌ DB Connection Error:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL as id', db.threadId);
});

// Test route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running!');
});

app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on port ${PORT}`));


const authRoutes = require('./routes/auth'); // path to your auth.js route file
app.use('/api/auth', authRoutes);
