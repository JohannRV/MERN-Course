import { BasicResponse } from "../types";


export interface IHelloCrontoler{
    getMessage(name? :string): Promise <BasicResponse>
}