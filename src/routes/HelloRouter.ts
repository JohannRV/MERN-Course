import express, { Request, Response } from "express";
import { HelloController } from '../controller/HelloController';
import { LogInfo } from "../utils/logger";

//Routes from express
let helloRouter = express.Router();

//https.//localhost:8000/api/hello/?name=Johan/
helloRouter.route('/')

//GET =>
.get(async (req: Request, res: Response) =>{
    //Obtain a Query param
    let name: any = req?.query.name;
    LogInfo(`Query Param: ${name}`)
    // Controller Instance to excute method
    const controller: HelloController = new HelloController()
    //Obtain Response
    const response = await controller.getMessage(name)
    // Send to the client response
    return res.send(response)
})
//Export hello router
export default helloRouter;