const express = require('express');
const router = express.Router();

// GET /greet -> generic greeting
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// GET /greet/:name -> personalized greeting
router.get('/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

module.exports = router;
