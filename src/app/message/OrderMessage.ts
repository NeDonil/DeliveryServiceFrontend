import {ORDER_ACTION} from "../model/OrderAction";
import {Order} from "../model/Order";


export interface OrderMessage {
    code : ORDER_ACTION,
    order: Order;
}
