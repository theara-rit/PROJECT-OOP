"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, price, itemType) {
        this.name = name;
        this.price = price;
        this.itemType = itemType;
    }
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getItemName = function () {
        return this.name;
    };
    return Item;
}());
exports.Item = Item;
