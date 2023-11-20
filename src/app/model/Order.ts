import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export class Order{
    id : number | undefined;
    comment: string | undefined;
    address: Address | undefined;
    beginDate !: Date;
    items: Array<OrderItem> | undefined;
}