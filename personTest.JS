let myLib = require("./person");

let persona3 = new myLib.Person("Pepe", "Sánchez", 1789, 178, 85,["comer", "saltar"]);

myLib.Person;
console.log(persona3);
console.log(persona3.IMC());
console.log(persona3.Edad());
persona3.printAll();
persona3.prtintHobbies();

