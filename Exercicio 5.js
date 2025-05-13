// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")()

let altura = Number(prompt('Insira sua altura: '))
let peso = Number(prompt('Insira seu peso: '))
let alturaAoQuadrado = altura ** 2
let imc = peso / alturaAoQuadrado

if (imc < 18.5){
    console.log('Você está abaixo do seu peso ideal.')
}
else if (imc >= 18.5 && imc <= 24.9){
    console.log('Parabéns! Você está no seu peso ideal!')
}
else if (imc >= 25 && imc <= 29.9){
    console.log('Você está com sobrepeso.')
}
else if (imc >= 30){
    console.log('Cuidado! Você está obeso')
}
