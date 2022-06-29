
import {Customer} from "./human/customer/Customer";
import {Gender, Person} from "./human/Person";
import {Staff} from "./human/staff/Staff";
import {Waiter} from "./human/staff/waiter";
import {HumanManager} from "./human/HumanManager";
import { Resturant } from "./Resturant";
import {RoomManager} from "./rooms/RoomsManager";
import {Table} from "./rooms/table";
import { Room } from "./rooms/Room";
import {Item} from "./menu/item";
import {Order} from "./order/order";
import {Menu} from "./menu/menu";
import { Receipes } from "./human/payMent/receipe";
import { ItemType } from "./menu/typeOfItem";




// Create Resturant
let fiveStar = new Resturant ("Five Star", "street 173");

// Create RoomManager
let roomManager = new RoomManager();
fiveStar.rooms=roomManager

// Create Customer
let kimky = new Customer ("Kimky",20, "kPT", Gender.FEMALE);
let him = new Customer ("Him",16,"PP",Gender.MALE)
fiveStar.human.addCustomer(kimky);
fiveStar.human.addCustomer(him);

// create waiter
let ronan = new Waiter ("RONAN",20, "FRANCE", Gender.FEMALE);
let rady = new Waiter ("RADY",20, "CAMBODIA", Gender.FEMALE);
ronan.setSalary(300);
rady.setSalary(250);
fiveStar.human.addStaff(rady);
fiveStar.human.addStaff(ronan);

// Create Room
let room1 = new Room (1);
let room2 = new Room (2);
fiveStar.rooms.addRoom(room1);
fiveStar.rooms.addRoom(room2);

// Create Table
let table1= new Table (1)
let table2= new Table (2)
let table3= new Table (3)

// Add Table to Room
room1.addTable(table1);
room2.addTable(table2);
room2.addTable(table3);

// create order for
let order1 = new Order (1, kimky);
let order2 = new Order (2, him);

// Create Item
let spaghetti = new Item('Spaghetti',45,ItemType.Food);
let coca = new Item('coca',13,ItemType.Drink);
let rice = new Item('rice',56,ItemType.Food);
let spinachSouffle = new Item('spinachSouffle',78,ItemType.Food);
let frites = new Item('frites',13,ItemType.Food);
let flan = new Item('flan',14,ItemType.Food);

// add item into orders
order1.addItem(spaghetti);
order1.addItem(coca);
order1.addItem(rice);
order2.addItem(spinachSouffle);
order2.addItem(frites);
order2.addItem(flan);

// Create menu
let menu = new Menu ();
menu.addItem(spaghetti);
menu.addItem(coca);
menu.addItem(rice);
menu.addItem(spinachSouffle);
menu.addItem(frites);
menu.addItem(flan);
fiveStar.menus.addMenu(menu);

// update invoices
let invoices1 = new Receipes(order1,ronan);
let invoices2 = new Receipes(order2,ronan);



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
