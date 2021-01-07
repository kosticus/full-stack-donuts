// getAllDonuts
// SELECT * FROM donuts;
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password#1',
  database: 'doughnuts'
});

connection.connect();

function getAllDonuts(callback) {
  connection.query('SELECT * FROM donuts;', function(err, results) {
    if (err) {
      // error-handling
      // throw new Error('Something went wrong fetching all donuts');
      callback(err, null);
    } else {
      // here are your donuts
      callback(null, results);
    }
  }); 
}

function getOneDonut(id, callback) {
  // fetch one donut in the database;
  connection.query('SELECT * FROM donuts WHERE id = ?', [ id ], (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, results);
  });
}

function getOneDonutPromise(id) {
  // fetch one donut in the database;
  return new Promise(function(resolve, reject) {
    connection.query('SELECT * FROM donuts WHERE id = ?', [ id ], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
  
      resolve(results[0]);
    });
  });
}

module.exports = {
  getAllDonuts: getAllDonuts,
  getOneDonut: getOneDonut,
  getOneDonutPromise
}