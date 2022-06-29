"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(roomId) {
        this.roomId = roomId;
        this.tables = [];
    }
    Room.prototype.addTable = function (table) {
        return this.tables.push(table);
    };
    return Room;
}());
exports.Room = Room;
