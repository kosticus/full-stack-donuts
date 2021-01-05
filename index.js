// set up an express server
var express = require('express');
var app = express();
var port = 3000;

// app.use(json.parser());
app.use(express.json());
/*
GET	/api/donuts	respond with string "all the donuts"
GET	/api/donuts/:id	respond with string "single donut"
*/
app.get('/', (req, res) => {
  console.log('dummy route works!');
  // res.status(500).send('Something went wrong');
  res.send('hello from server');
});

app.get('/api/donuts', (req, res) => {
  console.log('get all works!');
  // res.status(500).send('Something went wrong');
  res.send('all the donuts');
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
  // res.status(500).send('Something went wrong');
  res.send('single donut');
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});