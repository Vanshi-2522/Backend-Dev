const express = require('express');
const logger = require('./middleware/logger');
const validateRegister = require('./middleware/validateRegister');
const authorizeAdmin = require('./middleware/authorize');

const app = express();
app.use(express.json());

// Global middleware
app.use(logger);

// Routes
app.post('/register', validateRegister, (req, res) => {
  res.json({ message: 'Registration successful' });
});

app.get('/profile', authorizeAdmin, (req, res) => {
  res.json({ message: 'Welcome to your profile' });
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});