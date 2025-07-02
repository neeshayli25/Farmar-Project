const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Signup logic
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkQuery, [email], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (results.length > 0)
        return res.status(409).json({ error: 'Email already exists' });

      const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
      db.query(insertQuery, [email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ error: 'Signup failed' });
        res.status(201).json({ message: 'Signup successful' });
      });
    });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

// Login logic
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0)
      return res.status(401).json({ error: 'Invalid email or password' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(401).json({ error: 'Invalid email or password' });

    res.status(200).json({ message: 'Login successful' });
  });
};
