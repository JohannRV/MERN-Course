import express, { Express, Request, Response } from "express";

//Enviroment Variables
import dotenv from 'dotenv'

//Security
import cors from 'cors'
import helmet from "helmet";

//TODO HTTPS
//Root router
import rootRouter from '../routes'

//Root Routes

import routes from '../routes'
 

//Create a Express APP
const server: Express = express();
const port: string | number  = process.env.PORT || 8000;

//Define SERVER to use "/api" and use rootRooter from 'index.ts' in routes
//From this point onover: https://localhost:800'/api...

server.use(
    '/api',
    rootRouter
)
//TODO Mongoose Connection
server.use(helmet())
server.use(cors())

//Content Type Config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))

//Redirects Config
// https://localhost:8000/ => https://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})
export default server;
