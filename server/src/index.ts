import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

// initialize configs
dotenv.config();


const server = express();
const env = process.env.NODE_ENV;
const port = process.env.SERVER_PORT || 8080;


// Adding middleware to parse all incoming requests as JSON
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
// Adding middleware to allow cross-origin requests
server.use(cors());


server.listen(port, () => {
    console.log(`[${env}] Server is listening at http://localhost:${port}`);
});
