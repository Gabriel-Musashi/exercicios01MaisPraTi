//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente

const prompt = require("prompt-sync")()

let n1 = Number(prompt('Insira o primeiro número: '))
let n2 = Number(prompt('Insira o segundo número: '))

if (n1 > n2){
    console.log (n2, n1)
} else {
console.log(n1, n2)
}
if (n1 === n2){
    console.log ('Números iguais não serão lidos')
}