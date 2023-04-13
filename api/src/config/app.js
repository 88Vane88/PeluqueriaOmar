import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
//import router from './routes/index.js'

const server = express()

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(fileUpload({ useTempFiles: true }));
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/', (req, res)=>{
    res.send("Holaaa")
});

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

export default server;
 