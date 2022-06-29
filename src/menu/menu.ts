import { Item } from "./item";
export class Menu {
    items:Item[] = [];

    addItem (item:Item){
        return this.items.push(item);
    }

    
}