import {Order} from "./Order";
import {Employee} from "./Employee";

export interface OrderWithEmployee {
    employee: Employee;
    order: Order;
}
