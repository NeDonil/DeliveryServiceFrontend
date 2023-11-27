import {Address} from "./Address";
export interface Customer{
    id : number;
    fio : string;
    email: string;
    addresses : Address[];
}
