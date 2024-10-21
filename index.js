const express = require('express');
const mysql = require('mysql2');

// Create an Express app
const app = express();
const PORT = 3200;

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',     // MySQL server address (localhost if local)
  user: 'root',           // Your MySQL username
  password: 'chandan#95',   // Your MySQL password
  database: 'testjs'      // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Create a basic route to fetch data from a table
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM students';  // Replace 'users' with your table name

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving users');
    } else {
      res.json(results);  // Send the query result as JSON
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
