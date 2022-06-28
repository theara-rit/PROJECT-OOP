import { Menu } from "../../orderManagement.ts/menuManage/menu";
import { MenuItem } from "../../orderManagement.ts/menuManage/menuItem";

export class Customer extends Person {

    constructor(name:string,age:number,address:string,gender:Gender) {
        super(name,age,gender,address)
    }

    listOfFood() : MenuItem[] {
        let menu = new Menu();
        return menu.push(menu)
    }

    chooseRoom(){

    }


}