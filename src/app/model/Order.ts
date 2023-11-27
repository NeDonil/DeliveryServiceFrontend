import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export interface Order{
    id : number ;
    comment: string ;
    address: Address ;
    beginDate : Date;
    endDate : Date;
    status : string;
    items: Array<OrderItem>;
}
