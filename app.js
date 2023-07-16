import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import WebRoute from './api/routes/WebRoute.js';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import dotenv from 'dotenv';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;
dotenv.config()

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
app.use('/', WebRoute)

app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :)' })
})
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}/api/`);
})
