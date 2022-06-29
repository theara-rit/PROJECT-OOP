import { Item } from "./item";
import { Menu } from "./menu";


export class menuManager {
    public listMenu : Menu[] = [];
    item: Item;

    addMenu(menu : Menu){
        return this.listMenu.push(menu)
    }

    getTheBestCustomer() {
  
    }
}