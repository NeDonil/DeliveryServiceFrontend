import {ORDER_ACTION_RESPONSE} from "../model/OrderAction";
import {Order} from "../model/Order";
import {Employee} from "../model/Employee";


export interface OrderMessage {
    code : ORDER_ACTION_RESPONSE,
    employee: Employee;
    order: Order;
}
