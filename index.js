var express = require('express');
var app = express();
// var db = require('./config'); 
// ^^ We no longer need this as we are using the helper functions
var db = require('./queries');
var port = 4000; 
/*
// localhost:4000
var reactServer = 4001; // localhost:4001
*/

app.use(express.json());
app.use(express.static('./client/dist'));

// GET all
// URL: <localhost:4000>/api/donuts
app.get('/api/donuts', function(req, res) {
  // Step 1
  // console.log('get all the donuts');
  // res.send('all the donuts');

  // db.query('SELECT * FROM donuts', (err, results) => {
  //   // handle error if one exists
  //   if (err) {
  //     res.status(500).send('Failed to retrieve all donuts');
  //   } else {
  //     // otherwise, probably send results in response
  //     res.send(results);
  //   }
  // });
  // ^^ We probably don't want to write the db query directly in the server file
  // But I kept it in for an example reference

  // Step 2
  db.getAllDonuts(function(err, results) {
    if (err) {
      console.error('Failed to retrieve all donuts', err);
      res.status(500).send('Failed to retrieve all donuts');
    } else {
      // otherwise, probably send results in response
      res.send(results);
    }
  });
});

// GET one
app.get('/api/donuts/:id', (req, res) => {
  // Step 1
  // console.log('get one donut', req.params.id);
  // res.send('single donut');

  const donutId = req.params.id;

  // Step 2
  db.getOneDonut(donutId, (error, donut) => {
    if (error) {
      console.error('Failed to retrieve one donut', err);
      res.status(500).send('Failed to get the requested donut');
      return;
    }

    res.send(donut);
  });
});

// Step 5
app.post('/api/donuts', function(request, response) {
  // console.log('create a new donut', request.body);
  // response.send(request.body);

  var donut = request.body;

  db.createDonut(donut)
    .then(result => {
      response.status(201).send();
    })
    .catch(error => {
      console.error('Failed to create new donut', error);
      response.status(500).send('Failed to create a new donut in the server');
    });
});

// Step 5
app.patch('/api/donuts/:id', function(r, rs) {
  // console.log('we should update this donut', r.params.id);
  // rs.send(r.body);

  const donut = r.body;
  const donutId = r.params.id

  db.updateDonut(donut, donutId)
    .then(result => {
      rs.status(204).send();
    })
    .catch(e => {
      console.error('Failed to update the donut', e);
      rs.status(500).send('Failed to update the donut');
    });
});

// Step 5
app.delete('/api/donuts/:id', (req, res) => {
  // console.log('will delete donut', req.params.id);
  // res.send(req.params.id);

  const id = req.params.id;

  db.deleteDonut(id)
    .then(result => {
      res.send();
    })
    .catch(error => {
      console.error('Failed to delete the donut', error);
      res.status(500).send('Failed to delete the donut');
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!!!`);
});