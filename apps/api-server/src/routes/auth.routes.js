import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js'; // Assuming you have a db.js file for database connection
// import dotenv from 'dotenv'; // Uncomment if you are using dotenv for environment variables

const router = Router();

let users = [];

//Post request to register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password
    const hashsedPassword = await bcrypt.hash(password, 10);

    // save user to in-memory array
    const newUser = { name, email, password: hashsedPassword };
    users.push(newUser);

    return res.status(201).json({ message: 'User registered successfully' });

});

// POST /register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const [existing] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
  
      if (existing.length > 0) {
        return res.status(400).json({ message: 'Email already exists.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
      );
  
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error.' });
    }
  });
  
  // POST /login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  
      if (rows.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      const user = rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      res.json({ message: 'User logged in successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error.' });
    }
  });
  
  export default router;