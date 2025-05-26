const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const greetRouter = require('./routes/greet');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/greet', greetRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Node.js Project!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
