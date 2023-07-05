const express = require('express')
const morgan = require('morgan')
//require('dotenv').config();
//const sortData = require('./WebsitesSort');
 const dotenv = require('dotenv')
 dotenv.config();

const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const app = express();
// const port=3005
const port = process.env.PORT;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.status(200).send()
    }
    next();
})
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', (req, res, next) => {
    console.log("succeed");
    next()
})
const WebR = require('./routes/WebRoute')
app.use('/website', WebR)


// app.get('/data', async (req, res) => {
//     // Retrieve the data from your data source
//     const data = await getDataFromServiceAction();
    
//     // Sort it using the sorting function
//     const sortedData = sortData(data);
    
//     res.json(sortedData);
//   });
app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :)' })
})

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}/api/`);
})
