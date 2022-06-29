"use strict";
exports.__esModule = true;
exports.menuManager = void 0;
var menuManager = /** @class */ (function () {
    function menuManager() {
        this.listMenu = [];
    }
    menuManager.prototype.addMenu = function (menu) {
        return this.listMenu.push(menu);
    };
    menuManager.prototype.getTheBestCustomer = function () {
    };
    return menuManager;
}());
exports.menuManager = menuManager;
