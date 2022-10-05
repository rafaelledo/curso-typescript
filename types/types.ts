// 1-string
let personName: string = 'João'
console.log(personName)
// personName = 28

// 2-numbers
let age: number = 27
// age = 'Ana'
age = 27.5
console.log(age)

// 3-boolean
let haveHobbies: boolean = false
// haveHobbies = 1
console.log(haveHobbies)

// 4-explicit types
let myAge: number
myAge = 27
console.log(typeof myAge)
// myAge = '27'

// 5-array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// 6-tuplas
let adress: [string, number, string] = ["Av Principal", 99, ""]
console.log(adress)
adress = ["Rua Importante", 1260, "Bloco C"]
console.log(adress)

// 7-enums
enum Color {
  Cinza, // 0
  Verde, // 1
  Azul // 2
}

let myColor: Color = Color.Verde
console.log(myColor)

// 8-any
let car: any = 'BMW'
console.log(car)
car = { marca: 'BMW', ano: 2019 }
console.log(car)

// 9-functions
function returnMyName(): string {
  // return myAge
  return personName
}

console.log(returnMyName())

function sayHello(): void {
  console.log('Hello')
  // return myAge
}

sayHello()

function multiply(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiply(2, 'Bia'))
console.log(multiply(2, 2))

// 10-function type
let calculate: (num1: number, num2: number) => number
// calculate = sayHello
// calculate()
// calculate = {}
calculate = multiply
console.log(calculate(5, 6))

// 11-objects
let user: { name: string, age: number } = {
  name: 'João',
  age: 27
}
console.log(user)
// user = {}

// user = {
//   nome: 'Maria',
//   idade: 31
// }

user = {
  name: 'Maria',
  age: 31
}
console.log(user)