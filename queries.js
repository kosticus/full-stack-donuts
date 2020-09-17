var db = require('./config');

// Step 2
function getAllDonuts(cb) {
  db.query('SELECT * FROM donuts', (err, results) => {
    // handle error if one exists
    if (err) {
      // res.status(500).send('Failed to retrieve all donuts');
      // ^^ You cannot do this here, because there is no res!

      cb(err, null);
    } else {
      // res.send(results);
      // ^^ You cannot do this here, because there is no res!

      cb(null, results);
    }
  });
}

// Step 2
function getOneDonut(donutId, cb) {
  db.query('SELECT * FROM donuts WHERE id = ?', [ donutId ], (err, results) => {
    if (err) {
      cb(err, null);
      return;
    }

    cb(null, results[0]);
    // ^^ results is in an array and for our purposes, we will assume there is always only one match
    // In real dev-land, we would most likely handle this differently, but that's a different conversation
  });
}

// Step 5
function createDonut(donut) {
  return new Promise((resolve, reject) => {
    var queryString = `
      INSERT INTO donuts (type, doughFlavor, glazed, glazeFlavor)
      VALUES (?, ?, ?, ?)
    `;

    db.query(queryString, [ donut.type, donut.doughFlavor, donut.glazed, donut.glazeFlavor ], function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Step 5
function updateDonut(donut, donutId) {
  const queryString = `
    UPDATE donuts
    SET type = ?, doughFlavor = ?, glazed = ?, glazeFlavor = ?
    WHERE id = ?
  `;

  const values = [ donut.type, donut.doughFlavor, donut.glazed, donut.glazeFlavor, donutId ];

  return dbQueryAsync(queryString, values);
}

// Step 5
function deleteDonut(donutId) {
  const queryString = `
    DELETE FROM donuts
    WHERE id = ?
  `;

  return dbQueryAsync(queryString, [ donutId ]);
}

// Only for a slightly interesting example of one way to handle async code
function dbQueryAsync(queryString, queryValues) {
  return new Promise(function(res, rej) {
    db.query(queryString, queryValues, (err, results) => {
      if (err) {
        rej(err);
      } else {
        res(results);
      }
    });
  });
}

module.exports = {
  getAllDonuts: getAllDonuts,
  getOneDonut,
  createDonut,
  updateDonut: updateDonut,
  deleteDonut
}
// ^^ Multiple examples of options