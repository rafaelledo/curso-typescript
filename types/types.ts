// string
let personName: string = 'João'
console.log(personName)
// personName = 28

// numbers
let age: number = 27
// age = 'Ana'
age = 27.5
console.log(age)

// boolean
let haveHobbies: boolean = false
// haveHobbies = 1
console.log(haveHobbies)

// explicit types
let myAge: number
myAge = 27
console.log(typeof myAge)
// myAge = '27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let adress: [string, number, string] = ["Av Principal", 99, ""]
console.log(adress)
adress = ["Rua Importante", 1260, "Bloco C"]