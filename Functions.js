// const prompt = require("prompt-sync")()

// function RetornaParOuImpar(valor){
//     let resultado

//     if(valor % 2 === 0){
//         resultado = 'PAR'
//     } else {
//         resultado = 'ÍMPAR'
//     }

//     return resultado
// }

// let numero = Number(prompt('Insira o número que você quer saber se é par ou ímpar: '))
// let resultado = RetornaParOuImpar(numero)

// console.log(resultado)

// function calculaArea(altura, largura){
//     return altura * largura
// }

// console.log(calculaArea(10, 10))


// Façam uma função que retorna um array ordenado

// function ordenaArray(arr){
//     return arr.sort((a, b) => a - b)
// }

// console.log(ordenaArray([1, 3, 2, 10, 7]))

// function exibeNome(nome){
//     console.log(nome)
// }
// exibeNome('Alexia')

// let exibeNome = function(nome){
//     console.log(nome)
// }

// let exibeNome1 = (nome) => console.log(nome)

// exibeNome('Jaques')

// let sucesso = () => console.log('Requisição foi um sucesso')

// let erro = function() {
//     console,log('Requisição deu errado')
// }

// function requisicao (sucesso, erro) {
//     if(true){
//         sucesso()
//     } else {
//         erro()
//     }
// }

// requisicao (sucesso, erro)

// let sucesso = (message) => console.log(message)

// let erro = function() {
//     console,log('Requisição deu errado')
// }

// function requisicao (sucesso, erro) {
//     if(true){
//         sucesso('Requisição deu certo mesmo')
//     } else {
//         erro()
//     }
// }

// requisicao ((message) => console.log(message), erro) 


// criar uma função que soma os elemetnos de um array e retorna esse valor

// function somaArray (arr) {
//     let soma = 0
    
//     for (let i = 0; i < arr.length; i++){
//         soma += arr[i]
//     }
//     return soma
// }

// console.log(somaArray([1, 2, 3, 4, 5]))

// retorna o maior número de um array

// function maiorValor(arr){
//     let maior = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maior){
//             maior = arr[i]
//         }
//     }
//     console.log(maior)
// }

// maiorValor([1, 100, -3, 2, 0])

