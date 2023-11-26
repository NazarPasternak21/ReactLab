const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'dransvoboda',
  database: 'laptop_react',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database with ID ' + connection.threadId);
});

// Get all laptops
app.get('/laptops', (req, res) => {
  connection.query('SELECT * FROM laptops', (err, results) => {
    if (err) {
      console.error('Error getting laptops:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json(results);
  });
});

// Get a specific laptop
app.get('/laptops/:id', (req, res) => {
  const laptopId = req.params.id;
  connection.query('SELECT * FROM laptops WHERE id = ?', laptopId, (err, results) => {
    if (err) {
      console.error('Error getting laptop:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'Laptop not found' });
      return;
    }

    res.json(results[0]);
  });
});

// Add a new laptop
app.post('/laptops', (req, res) => {
  const laptopData = req.body;
  connection.query('INSERT INTO laptops SET ?', laptopData, (err, results) => {
    if (err) {
      console.error('Error creating laptop:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.status(201).json({ message: 'Laptop created successfully' });
  });
});

// Update a laptop
app.put('/laptops/:id', (req, res) => {
  const laptopId = req.params.id;
  const laptopData = req.body;
  connection.query('UPDATE laptops SET ? WHERE id = ?', [laptopData, laptopId], (err, results) => {
    if (err) {
      console.error('Error updating laptop:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json({ message: 'Laptop updated successfully' });
  });
});

// Delete a laptop
app.delete('/laptops/:id', (req, res) => {
  const laptopId = req.params.id;
  connection.query('DELETE FROM laptops WHERE id = ?', laptopId, (err, results) => {
    if (err) {
      console.error('Error deleting laptop:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json({ message: 'Laptop deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
