/**
 * Root Router
 * Redirection to Routers
 */
import express, { Response, Request } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";

//Server Instance
let server = express();

// Router Instance

let rootRouter = express.Router()

//Activate for request to https://localhost:8000/api

 //Get => https://localhost:8000/api/

rootRouter.get('/', (req:Request, res:Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    // Send Hello World
    res.send('Welcome to App Express + Nodemon + Jest Typescript + Swagger + Mongoose');
});

//Redirections to routers & controllers

server.use('/', rootRouter) //https://localhost:8000/api
server.use('/hello', helloRouter) //https://localhost:8000/api/hello => HelloRouter
// Add more router to the app

export default server; 