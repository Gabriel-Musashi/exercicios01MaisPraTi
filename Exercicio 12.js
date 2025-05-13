// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for

const prompt = require("prompt-sync")()

let numeroTabuada = Number(prompt('Qual o número quer saber a tabuada?'))

for(let contadora = 1; contadora <= 10; contadora++){
    console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)
}