// Array

let heroes = ['Batman', 'Coringa', 'Ultron']
const ages = [19, 21, 28, 33]
const randomArray = ['Parker', 'João', 'mayk', 19, 21]

// Como fazer uma atribuição?
heroes[2] = 'Kodzilla'

console.log(ages[2])

// Métodos de arrays
const joinHeroes = heroes.join(', ')
const indexOf25 = ages.indexOf(21)
const moreHeroes = heroes.concat(['Superman', 'Homem forminga']) // Vai concatenar, ou seja, de maneira simplista 'adicionar esses nomes no array 'heroes' '
const pushHeroes = heroes.push('Wolwerine') // Altera o valor original da const heroes
const popHeroes = heroes.pop() // Remove o último item do array

console.log(joinHeroes)
console.log(indexOf25)
console.log(moreHeroes)

console.log(heroes.length) // Ele irá ter 4, pois adicionei Wolwerine no final

console.log(heroes)