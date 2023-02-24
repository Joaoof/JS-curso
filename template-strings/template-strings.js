const postTitle = 'É açai ou terra?'
const postAuthor = 'João de Deus'
const postComments = 15

// usando concatenação
const postMessage = 'o post "' + postTitle + '" do ' + postAuthor + ', tem ' + postComments + ' comentários' 

console.log(postMessage)

// usando template strings 
const postMessage2 = `O post "${postTitle}" do ${postAuthor}, tem ${postComments} comentários`

console.log(postMessage2)

// criando templaate HTML

const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`
console.log(html)