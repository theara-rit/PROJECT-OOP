import { Customer } from "../human/customer/Customer";
import { Waiter } from "../human/staff/waiter";
export class Table {
    customers : Customer;
    waiter : Waiter;
    constructor(private tableId: number) {
    }
}