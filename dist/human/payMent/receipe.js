"use strict";
exports.__esModule = true;
exports.Receipes = void 0;
var Receipes = /** @class */ (function () {
    function Receipes(order, waiter) {
        this.order = order;
        this.waiter = waiter;
    }
    Receipes.prototype.invoice = function () {
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
    return Receipes;
}());
exports.Receipes = Receipes;
