import { Room } from "./Room";

export class PublicRoom extends Room{
    constructor (protected chair:number, protected table:number){
        super(chair, table);
    }
    
}