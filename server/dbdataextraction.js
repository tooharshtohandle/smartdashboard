const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',  // replace with your MySQL host
  user: 'harsh',  // replace with your MySQL user
  password: 'harsh',  // replace with your MySQL password
  database: 'DELLFIRST',  // replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Function to execute a query and return a Promise
const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Export the executeQuery function
//module.exports = executeQuery;
module.exports = {
    executeQuery,
  };