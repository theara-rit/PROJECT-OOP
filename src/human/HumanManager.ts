import { Item } from "../menu/item";
import { Order } from "../order/order";
import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HumanManager {
    private customer: Customer[] = [];
    private staff: Staff[] = [];

    addCustomer(customer: Customer) {
        this.customer.push(customer);
    }

    addStaff(staff: Staff) {
        this.staff.push(staff);
    }
    getStaff() {
        return this.staff;
    }





}
