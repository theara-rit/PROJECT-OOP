import { Staff } from "./Staff";

export class Cleaner extends Staff {
    constructor (name: string,age:number,address:string,salary:number,protected gender:Gender) {
        super(name,age,gender,address);
    }
    getSalary() {
        
    }
}