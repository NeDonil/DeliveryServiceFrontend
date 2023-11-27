import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export class Order{
    id : number | undefined ;
    comment: string | undefined;
    address: Address | undefined;
    beginDate : Date | undefined;
    endDate : Date | undefined;
    status : string | undefined;
    items: Array<OrderItem> | undefined;
}
