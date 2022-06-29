"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
        this.items = [];
    }
    Menu.prototype.addItem = function (item) {
        return this.items.push(item);
    };
    return Menu;
}());
exports.Menu = Menu;
