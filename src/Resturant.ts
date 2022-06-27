import { HumanManager } from "./human/HumanManager";
import { OrderManager } from "./orderManagement.ts/orderManager";
import { RoomManager } from "./rooms/RoomsManager";

export class Resturant {
    private name: string;
    private address: string;
    
    // public
    public human: HumanManager = new HumanManager();
    public rooms: RoomManager = new RoomManager();
    public orders: OrderManager = new OrderManager();
}