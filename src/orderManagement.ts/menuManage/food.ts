import { Item } from "./item";

export class Food extends Item{
    constructor(protected name: string, protected price: number){
        super(name, price);
    }
}