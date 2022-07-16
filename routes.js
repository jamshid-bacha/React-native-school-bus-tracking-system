const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '',        // Your database's password.
  database : 'bus'   // Your database's name.
});


const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/student', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT guardianContact, pass FROM student', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/student so you can see the data.');
});