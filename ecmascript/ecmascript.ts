// let & const
// console.log(canI)
// var canI = '?' // hoisting
// let canI = '?' // hoisting

let isCold = true
if (isCold) {
  // let action = 'Put the jacket!'
  // var action = 'Put the jacket!'
}
// console.log(action)

const cpf: string = '123.456.000-99'
// cpf = '978.123.445-55'
console.log(cpf)

var secret = 'externo'
function reveal() {
  var secret = 'interno'
  console.log(secret)
}
reveal()
console.log(secret)