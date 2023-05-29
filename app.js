const morgan = require('morgan');
const logger = require('./logger');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// Set up CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    res.status(200).send();
  }
  next();
});

app.use(bodyParser.json());

// Set up logging middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logger.stream }));

app.use('/', (req, res, next) => {
  console.log('succeed');
  next();
});

// Set up user routes
const UserR = require('./routes/UserRoute');
app.use('/UserRoute', UserR);

// Default route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello!!!!! :)' });
});

// Start server
app.listen(port, () => {
  console.log('wow');
  console.log(`my app is listening on http://localhost:${port}`);
});