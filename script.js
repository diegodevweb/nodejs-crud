// require("./modules/path");
// require("./modules/fs");
// require("./modules/http"); 


const connectToDatabase = require("./src/database/connect");
const dotenv =require("dotenv");
dotenv.config();
connectToDatabase();

require("./modules/express");








// const { Person } = require("./person");

// const person1 = new Person("Mario");
// console.log(person1.sayName());

