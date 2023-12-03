import {ORDER_ACTION} from "../model/OrderAction";
import {Order} from "../model/Order";
import {Employee} from "../model/Employee";


export interface OrderMessage {
    code : ORDER_ACTION,
    employee: Employee;
    order: Order;
}
