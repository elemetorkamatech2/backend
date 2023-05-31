const express=require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express()
const port=3009

//הרשאות  
app.use((req, res, next) => {
    //origin, headers, methods
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.status(200).send()
    }
    next()
})
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', (req, res, next) => {
    console.log("succeed");
    next()
})

//יצירת ראוטר
const UserR = require('./routes/UserRoute')
//יצירת הניתוב-בניתוב זה יביא את הפונקציות שיש בקובץ הניתובים
app.use('/UserRoute',UserR)

//ניתוב ברירת מחדל שיכתוב הערה
// app.get('/', (req, res) => {
//     res.status(200).json({ 'message': 'hello!!!!! :)' })
// })
app.get('/api/getAll', (req, res) => {
    res.json(listUsres);
  });
const options = {
    swaggerDefinition: {
      swagger: '2.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API for my application'
      },
      basePath: '/api',
      schemes: ['http'],
    },
    apis: ['./routes/.js'],
  };
  
  const specs = swaggerJsdoc(options);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//שיביא בקונסול את כתובת השרת
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}`);

})



