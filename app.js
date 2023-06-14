const express=require('express')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const app = express();
const port=3005
// const port = process.env.PORT;
app.use((req, res, next) => {
  res.header( 'Access-Control-Allow-Origin', '*' )
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' )
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
//לשאול איך בדיוק צריך לעשות את כל הקריאות!!!!!!!!!!!!!!!
const UserR = require('./routes/UserRoute')
app.use('/api',UserR)
//ניתוב ברירת מחדל שיכתוב הערה
app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :)' })
})

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}/api/`);
})
