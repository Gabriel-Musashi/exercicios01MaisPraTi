// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

const prompt = require('prompt-sync')()

let nota = Number(prompt('Insira a nota do aluno: '))

if (nota < 5){
    console.log('Aluno foi reprovado!')
}
else if (nota >= 5 && nota < 7){
    console.log('Aluno em recuperação!')
}
else {
    console.log('Aluno foi aprovado!')
}