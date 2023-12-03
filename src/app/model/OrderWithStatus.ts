import {ORDER_STATUS} from "./OrderStatus";
import {Order} from "./Order";

export interface OrderWithStatus{
    status : ORDER_STATUS;
    order: Order;
}
