// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")()


let total = 0
for (let i = 0; i < 5; i++){
    let numero = Number(prompt("Digite aqui o número: "))
    total += numero
}
console.log('A soma total é: ', total)