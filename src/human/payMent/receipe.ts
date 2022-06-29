import { Order } from "../../order/order";
import { Waiter } from "../staff/waiter";

export  class Receipes  {
    constructor(protected order:Order, protected waiter:Waiter){}
    invoice(){
        let result = '';
        let totalPrice: number = 0;
        result += "TableId#: "+ this.order.getTableId() + "\n";
        let items =  this.order.getItems();
        for (let item of items){
            result += "- " + item.getItemName() + ": " + item.getPrice()+ '\n';
            totalPrice += item.getPrice();
        }
        return result + "Total: " + totalPrice;
    }
}