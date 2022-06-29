"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(tableId, customer) {
        this.tableId = tableId;
        this.customer = customer;
        this.listOfItem = [];
    }
    Order.prototype.addItem = function (items) {
        return this.listOfItem.push(items);
    };
    Order.prototype.getCustomer = function () {
        return this.customer;
    };
    Order.prototype.getItems = function () {
        return this.listOfItem;
    };
    Order.prototype.getTableId = function () {
        return this.tableId;
    };
    return Order;
}());
exports.Order = Order;
