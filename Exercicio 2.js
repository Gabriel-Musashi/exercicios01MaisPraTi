// # Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// # adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// # controle if-else.

const prompt = require('prompt-sync')()

let age = Number(prompt('Insira a sua idade: '))

if (age < 12) {
    console.log('Você é uma criança')
}
else if (age >= 12 && age <= 17) {
    console.log('Você é um adolescente')
}
else if (age >= 18 && age <= 60) {
    console.log('Você é um adulto')
}
else {
    console.log('Você é um idoso')
}