import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import WebRoute from './routes/WebRoute.js';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import dotenv from 'dotenv';
import Keycloak from 'keycloak-connect';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;
dotenv.config()

const keycloakConfig = {
    "serverUrl": "http://localhost:8080/",
    "realm": "keycloak-react-auth",
    "clientId": "Node-auth"
};
const keycloak = new Keycloak({}, keycloakConfig);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.status(200).header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET').send();
    } else {
        next();
    }
})
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).send();
//     } else {
//         next();
//     }
// });
app.use(keycloak.middleware());
app.use(keycloak.protect());
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', (req, res, next) => {
    console.log("succeed");
    next()
})
// app.use((req, res, next) => {
//     console.log(req.headers.authorization);
//     next();
// });

app.use('/website', WebRoute)

app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'hello!!!!! :)' })
})
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log('wow');
    console.log(`my app is listening on http://localhost:${port}/api/`);
})
