import { ItemType } from "./typeOfItem";

export class Item  {
 
  constructor( protected name: string,protected price: number, protected itemType: ItemType){
   
  }
  getPrice(){
    return this.price;
  }

  getItemName(){
    return this.name;
  }
  
}