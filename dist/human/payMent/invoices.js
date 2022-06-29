"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(order, waiter) {
        this.order = order;
        this.waiter = waiter;
    }
    Invoice.prototype.totalPrice = function () {
        var result = '';
        var totalPrice = 0;
        result += "TableId#: " + this.order.getTableId() + "\n";
        var items = this.order.getItems();
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            result += "- " + item.getItemName() + ": " + item.getPrice() + '\n';
            totalPrice += item.getPrice();
        }
        return result + "Total: " + totalPrice;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
