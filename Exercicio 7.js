// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let Maças = Number(prompt('Quantas maçãs foram compradas?'))
let preço 

if (Maças < 12){
    preço = Maças * 0.30
} 
else {
    preço = Maças * 0.25
}
console.log('O valor da sua compra é: R$' + preço.toFixed(2))
