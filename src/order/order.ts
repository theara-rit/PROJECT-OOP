import { Customer } from "../human/customer/Customer";
import { Item } from "../menu/item";
import { Table } from "../rooms/table";

export class Order{
    private listOfItem : Item[]=[];
    constructor(private tableId : number, protected customer: Customer){}
        
    addItem(items : Item){
        return this.listOfItem.push(items);
    }
    
    getCustomer(){
        return this.customer;
    }
    getItems(){
        return this.listOfItem;
    }

    getTableId(){
        return this.tableId;
    }
}