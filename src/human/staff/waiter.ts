import { Staff } from "./Staff";
export class Waiter extends Staff {
    constructor (name: string,age:number,address:string,gender:Gender){
        super(name,age,gender,address);
    }

    createMenuFromCustomer(){

    }



    
}