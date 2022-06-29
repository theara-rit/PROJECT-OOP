"use strict";
exports.__esModule = true;
exports.Resturant = void 0;
var HumanManager_1 = require("./human/HumanManager");
var menuManagement_1 = require("./menu/menuManagement");
var RoomsManager_1 = require("./rooms/RoomsManager");
var Resturant = /** @class */ (function () {
    function Resturant(name, address) {
        // public
        this.human = new HumanManager_1.HumanManager();
        this.rooms = new RoomsManager_1.RoomManager();
        this.menus = new menuManagement_1.menuManager();
        this.name = name;
        this.address = address;
    }
    return Resturant;
}());
exports.Resturant = Resturant;
