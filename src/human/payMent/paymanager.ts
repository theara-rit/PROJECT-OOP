import { Item } from "../../menu/item";
import { Receipes } from "./receipe";




class Paymanager{
    receipes : Receipes[] = [];

    setInvoices(receipe: Receipes){
        return this.receipes.push(receipe);
    }

    getinvoices(){
        return this.receipes;
    }

    getTotalItems(items : Item){
        return this.receipes;
    }






}

function invoices(invoices: any) {
    throw new Error("Function not implemented.");
}
