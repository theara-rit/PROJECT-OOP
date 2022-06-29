import { Item } from "../../menu/item";
import { Gender, Person } from "../Person";

export class Customer extends Person {  
    constructor(name:string,age:number,address:string,gender:Gender) {
        super(name,age,gender,address)
        
    }
}