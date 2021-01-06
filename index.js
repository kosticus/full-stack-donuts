// set up an express server
var express = require('express');
var app = express();
var port = 3000;
var db = require('./queries');

// app.use(json.parser());
app.use(express.json());
/*
STEP 1
GET	/api/donuts	respond with string "all the donuts"
GET	/api/donuts/:id	respond with string "single donut"
*/
/*
STEP 2
GET	/api/donuts	respond with all the donuts from the database
1. Connect to MySQL
2. Query the database (SELECT * FROM donuts)
GET	/api/donuts/:id	respond with single donut, based on req.params.id
*/
app.get('/', (req, res) => {
  console.log('dummy route works!');
  // res.status(500).send('Something went wrong');
  res.send('hello from server');
});

app.get('/api/donuts', (req, res) => {
  console.log('get all works!');
  // res.status(500).send('Something went wrong');
  // try {
  //   db.getAllDonuts();
  // } catch (error) {
  //   // error-handling
  // }
  db.getAllDonuts(function(error, donuts) {
    if (error) {
      // error-handling
      // res.sendStatus(500);
      res.status(500).send('Something went wrong');
    } else {
      // happy path
      res.send(donuts);
    }
  });
  // res.send('all the donuts');
});


// color
// name
// type
// flavor
// icing
// ?color="yellow"&name="cake"
// app.get('/api/donuts/search', (req, res) => {
//   const query = req.query;
// });


app.get('/api/donuts/sugar', (req, res) => {
  const params = req.params;
  const query = req.query;
  console.log('sugar', params.donutId, query);
  // res.status(500).send('Something went wrong');
  res.send('single sugar');
});

app.get('/api/donuts/:donutId', (req, res) => {
  const params = req.params;
  const query = req.query;
  console.log('get one works!', params.donutId, query);

  // db.getOneDonut(params.donutId, (e, d) => {
  //   if (e) {
  //     res.sendStatus(500);
  //     return;
  //   }

  //   res.send(d);
  // });

  db.getOneDonut(params.donutId)
    .then(d => {
      res.send(d);
    })
    .catch(e => {
      res.sendStatus(500);
    });
  // res.status(500).send('Something went wrong');
  // res.send('single donut');
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});