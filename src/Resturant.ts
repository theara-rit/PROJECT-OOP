import { HumanManager } from "./human/HumanManager";
import { Menu } from "./menu/menu";
import { menuManager } from "./menu/menuManagement";
import { RoomManager } from "./rooms/RoomsManager";

export class Resturant {
    private name: string;
    private address: string;
    
    // public
    public human: HumanManager = new HumanManager();
    public rooms: RoomManager = new RoomManager();
    public menus: menuManager = new menuManager();

    constructor (name: string, address:string){
        this.name = name;
        this.address=address;
    }
}