// inteiros e decimais 
const radius = 10
const pi = 3.14

console.log(radius, pi)

// operadores aritméticos
const reminder = 5 % 2 // imagine que eu esteja multiplicando 2 x 2 = 4, pego o resultado e subtraio por 5, ou seja 5-4 = 1

const area = pi * radius ** 2

console.log(reminder)

// ordem de operação
const crazyOperation = 5 * (10 - 3) ** 2

console.log(crazyOperation)
console.log(area)

/* 1 - parênteses
   2 - expoente ou raizes
   3 - multiplicação e divisão
   4 - adição e subtração
 */

// operadores de incremento e decremento

let postLikes = 10 

// postLikes = postLikes + 1

// * postLikes++ => incremento
// * postLikes-- => decremento

console.log(postLikes)

// operation add, sub, multip, division e assignment

postLikes += 10
postLikes -= 5
postLikes *= 3
postLikes /= 2

console.log(postLikes)

// NaN - not a number

console.log( 7 / 'olá')

// concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes'

console.log(likesMessage)