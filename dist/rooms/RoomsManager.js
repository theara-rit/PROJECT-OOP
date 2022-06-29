"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.rooms = [];
    }
    RoomManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
