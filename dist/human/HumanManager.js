"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customer = [];
        this.staff = [];
    }
    HumanManager.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staff.push(staff);
    };
    HumanManager.prototype.getStaff = function () {
        return this.staff;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
