import { Item } from "./item";

export class Drink extends Item {
    constructor(protected name: string, protected price: number){
        super(name, price);
    }
}