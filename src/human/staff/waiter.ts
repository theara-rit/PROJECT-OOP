import { Gender } from "../Person";
import { Staff } from "./Staff";
export class Waiter extends Staff {
    static total: any;
    constructor (name: string,age:number,address:string,gender:Gender){
        super(name,age,gender,address);
    }
}