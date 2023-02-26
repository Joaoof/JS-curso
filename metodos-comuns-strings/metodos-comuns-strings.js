// metodos comuns de Strings

const email = 'joaodeus400@gmail.com'

//const lastIndexOfA = email.lastIndexOf('a') // Esse mẃtodo obtém a ultima ocorrẽncia do caracter a

const emailSlice = email.slice(0, 9) // Ele vai servir como um fatiador eu especifico, pro exemplo;
// Onde começa e onde terminar, ou seja, aparti dalí vai se iniciar o corte, e os numeros que não foram selecionados, como 10 adiante, serão cortados.

const emailReplace = email.replace('joao', 'lindao') // ler-se, eu quero substituir 'joao' por 'lindao'

console.log(emailReplace)