import dotenv from 'dotenv';
import server from './src/server'
import { LogError, LogSucces } from './src/utils/logger';

//Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

//Execute server

server.listen(port, () => {
    LogSucces(`[Server on]: Running in http://localhost:${port}/api`)
})

// Control SERVER ERROR
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`)
})

