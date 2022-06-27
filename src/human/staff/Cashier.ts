import { Staff } from "./Staff";

export class Cashier extends Staff {
    constructor (name:string,age:number,address:string,gender:Gender) {
       super(name,age,gender,address);
    }
  
  
}