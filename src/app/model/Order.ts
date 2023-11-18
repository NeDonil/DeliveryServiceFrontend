import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export class Order{
    id : number | undefined;
    comment: string | undefined;
    address: Address | undefined;
    items: Array<OrderItem> | undefined;
}