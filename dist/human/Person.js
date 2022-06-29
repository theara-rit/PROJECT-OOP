"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender = exports.Gender || (exports.Gender = {}));
var Person = /** @class */ (function () {
    function Person(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    return Person;
}());
exports.Person = Person;
