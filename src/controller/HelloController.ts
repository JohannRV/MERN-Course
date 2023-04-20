import { BasicResponse } from "./types";
import { IHelloCrontoler } from "./interfaces";
import { LogSucces } from "../utils/logger";

export class HelloController implements IHelloCrontoler {
   public async getMessage(name?: string ): Promise<BasicResponse> {
        LogSucces('[/api/hello] Get Request')

        return{
            message: `Hello, ${name || "World"}`
        }
    }

} 