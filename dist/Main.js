"use strict";
exports.__esModule = true;
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var waiter_1 = require("./human/staff/waiter");
var Resturant_1 = require("./Resturant");
var RoomsManager_1 = require("./rooms/RoomsManager");
var table_1 = require("./rooms/table");
var Room_1 = require("./rooms/Room");
var item_1 = require("./menu/item");
var order_1 = require("./order/order");
var menu_1 = require("./menu/menu");
var receipe_1 = require("./human/payMent/receipe");
var typeOfItem_1 = require("./menu/typeOfItem");
// Create Resturant
var fiveStar = new Resturant_1.Resturant("Five Star", "street 173");
// Create RoomManager
var roomManager = new RoomsManager_1.RoomManager();
fiveStar.rooms = roomManager;
// Create Customer
var kimky = new Customer_1.Customer("Kimky", 20, "kPT", Person_1.Gender.FEMALE);
var him = new Customer_1.Customer("Him", 16, "PP", Person_1.Gender.MALE);
// fiveStar.human.addCustomer(kimky);
// fiveStar.human.addCustomer(him);
// create waiter
var ronan = new waiter_1.Waiter("RONAN", 20, "FRANCE", Person_1.Gender.FEMALE);
var rady = new waiter_1.Waiter("RADY", 20, "CAMBODIA", Person_1.Gender.FEMALE);
ronan.setSalary(300);
rady.setSalary(250);
// fiveStar.human.addStaff(rady);
// fiveStar.human.addStaff(ronan);
// Create Room
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
// fiveStar.rooms.addRoom(room1);
// fiveStar.rooms.addRoom(room2);
// Create Table
var table1 = new table_1.Table(1);
var table2 = new table_1.Table(2);
var table3 = new table_1.Table(3);
// Add Table to Room
room1.addTable(table1);
room2.addTable(table2);
room2.addTable(table3);
// create order for
var order1 = new order_1.Order(1, kimky);
var order2 = new order_1.Order(2, him);
// Create Item
var spaghetti = new item_1.Item('Spaghetti', 45, typeOfItem_1.ItemType.Food);
var coca = new item_1.Item('coca', 13, typeOfItem_1.ItemType.Drink);
var rice = new item_1.Item('rice', 56, typeOfItem_1.ItemType.Food);
var spinachSouffle = new item_1.Item('spinachSouffle', 78, typeOfItem_1.ItemType.Food);
var frites = new item_1.Item('frites', 13, typeOfItem_1.ItemType.Food);
var flan = new item_1.Item('flan', 14, typeOfItem_1.ItemType.Food);
// add item into orders
order1.addItem(spaghetti);
order1.addItem(coca);
order1.addItem(rice);
order2.addItem(spinachSouffle);
order2.addItem(frites);
order2.addItem(flan);
fiveStar.menus.getTheBestCustomer();
// Create menu
var menu = new menu_1.Menu();
menu.addItem(spaghetti);
menu.addItem(coca);
menu.addItem(rice);
menu.addItem(spinachSouffle);
menu.addItem(frites);
menu.addItem(flan);
// fiveStar.menus.addMenu(menu);
// update invoices
var invoices1 = new receipe_1.Receipes(order1, ronan);
var invoices2 = new receipe_1.Receipes(order2, ronan);
// main 
// console.log(room1);
// console.log(room2);
// console.log(order1);
// console.log(order2);
// console.log(menu);
// console.log(ronan);
// console.log(rady);
console.log(fiveStar);
console.log(invoices1.invoice() + "\n");
console.log(invoices2.invoice());
