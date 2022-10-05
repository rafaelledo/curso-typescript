"use strict";
// 1-string
let personName = 'João';
console.log(personName);
// personName = 28
// 2-numbers
let age = 27;
// age = 'Ana'
age = 27.5;
console.log(age);
// 3-boolean
let haveHobbies = false;
// haveHobbies = 1
console.log(haveHobbies);
// 4-explicit types
let myAge;
myAge = 27;
console.log(typeof myAge);
// myAge = '27'
// 5-array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// 6-tuplas
let adress = ["Av Principal", 99, ""];
console.log(adress);
adress = ["Rua Importante", 1260, "Bloco C"];
console.log(adress);
// 7-enums
var Color;
(function (Color) {
    Color[Color["Cinza"] = 0] = "Cinza";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul"; // 2
})(Color || (Color = {}));
let myColor = Color.Verde;
console.log(myColor);
// 8-any
let car = 'BMW';
console.log(car);
car = { marca: 'BMW', ano: 2019 };
console.log(car);
// 9-functions
function returnMyName() {
    // return myAge
    return personName;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello');
    // return myAge
}
sayHello();
function multiply(numA, numB) {
    return numA * numB;
}
// console.log(multiply(2, 'Bia'))
console.log(multiply(2, 2));
// 10-function type
let calculate;
// calculate = sayHello
// calculate()
// calculate = {}
calculate = multiply;
console.log(calculate(5, 6));
// 11-objects
let user = {
    name: 'João',
    age: 27
};
console.log(user);
// user = {}
// user = {
//   nome: 'Maria',
//   idade: 31
// }
user = {
    name: 'Maria',
    age: 31
};
console.log(user);
