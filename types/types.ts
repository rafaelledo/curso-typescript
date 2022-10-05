// # string
let personName: string = 'João'
console.log(personName)
// personName = 28

// # numbers
let age: number = 27
// age = 'Ana'
age = 27.5
console.log(age)

// # boolean
let haveHobbies: boolean = false
// haveHobbies = 1
console.log(haveHobbies)

// # explicit types
let myAge: number
myAge = 27
console.log(typeof myAge)
// myAge = '27'

// # array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// # tuplas
let adress: [string, number, string] = ["Av Principal", 99, ""]
console.log(adress)
adress = ["Rua Importante", 1260, "Bloco C"]
console.log(adress)

// # enums
enum Color {
  Cinza, // 0
  Verde, // 1
  Azul // 2
}

let myColor: Color = Color.Verde
console.log(myColor)

// # any
let car: any = 'BMW'
console.log(car)
car = { marca: 'BMW', ano: 2019 }
console.log(car)

// # functions
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

// # function type
let calculate: (num1: number, num2: number) => number
// calculate = sayHello
// calculate()
// calculate = {}
calculate = multiply
console.log(calculate(5, 6))

// # objects
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

// # Alias
type Employee = {
  supervisors: string[], 
  toClockIn: (hour: number) => string 
}

// # Object types challenge
let employee: Employee = {
  supervisors: [
    'Antonio',
    'Roberta'
  ],
  toClockIn: (hour: number): string => {
    return hour <= 8 ? 'Ponto normal' : 'Fora do horário'
  }
}
console.log(employee.supervisors)
console.log(employee.toClockIn(8))
console.log(employee.toClockIn(9))

// employee = {}

// # Union types
let score: number | string = 10
console.log(`Minha nota é ${score}`)

// ## Checking Types
let value = 30

if (typeof value === "number") {
  console.log("É um number!")
} else {
  console.log(typeof value)
}

function fail(msg: string): never {
  throw new Error(msg)
}

const product = {
  name: 'Sabão',
  price: -1,
  validateProduct() {
    if (!this.name || this.name.trim().length == 0) {
      fail('Precisa ter um nome')
    }
    if (this.price <= 0) {
      fail('Preço inválido')
    }
  }
}

product.validateProduct()