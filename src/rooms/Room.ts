import { Table } from "./table";

export class Room {
    tables : Table[] = [];
    constructor(private roomId : number){}

    addTable(table : Table){
        return this.tables.push(table);
    }
}