// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")()


let contador = 0
let resposta = null
let soma = 0

while(resposta != 0){
resposta = Number(prompt('Informe as médias: (para calcular a média final digite 0):'))

soma += resposta
contador ++
}

let mediaFinal = soma/(contador -1)
console.log (`A média final é: ${mediaFinal}`)