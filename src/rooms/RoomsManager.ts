import { Room } from "./Room";
import { Table } from "./table";

export class RoomManager{
    rooms : Room[] = [];

    addRoom(room: Room){
        return this.rooms.push(room);
    }
}