import { Product } from "./Product";

export class OrderItem{
    id: number | undefined;
    product: Product | undefined;
    count: number | undefined;
}