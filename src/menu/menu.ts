import { Order } from "../order";
import { MenuItem } from "./menuItem";

export class Menu {
    push(menu: Menu): MenuItem[] {
        throw new Error("Method not implemented.");
    }
    menuItem : MenuItem[]=[];
    order : Order[]=[];
}