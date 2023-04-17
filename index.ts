import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express APP

const app: Express = express();
const port: string | number  = process.env.PORT || 8000;

//Define the firts route of APP
app.get('/', (req:Request, res:Response) => {
    // Send Hello World
    res.send('Welcome to App Express + Nodemon + Jest Typescript + Swagger + Mongoose');
});

app.get('/hello', (req:Request, res:Response) => {
    // Send Hello World
    res.send('Hello world');
});




// Excute the APP and listen requests to port
app.listen(port, () =>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})
