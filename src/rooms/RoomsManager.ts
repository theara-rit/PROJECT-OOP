import { Chair } from "./material/chair";
import { Table } from "./material/table";


export class RoomManager {
    protected chairs: Chair[]=[];
    protected table: Table[]=[];

    addChair(chair:Chair){
        this.chairs.push(chair);
    }

    getChair(){
        return this.chairs;
    }

    addTable (table: Table){
        this.table.push(table);
    }

    getTable(){
        return this.table;
    }
}