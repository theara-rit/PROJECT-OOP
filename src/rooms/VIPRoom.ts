
import { Room } from "./Room";

export class VIPRoom extends Room{
    constructor (protected chair:number, protected table:number){
        super(chair, table);
    }
    
}
