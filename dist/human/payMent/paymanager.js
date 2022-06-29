"use strict";
exports.__esModule = true;
var Paymanager = /** @class */ (function () {
    function Paymanager() {
        this.receipes = [];
    }
    Paymanager.prototype.setInvoices = function (receipe) {
        return this.receipes.push(receipe);
    };
    Paymanager.prototype.getinvoices = function () {
        return this.receipes;
    };
    Paymanager.prototype.getTotalItems = function (items) {
        return this.receipes;
    };
    return Paymanager;
}());
function invoices(invoices) {
    throw new Error("Function not implemented.");
}
