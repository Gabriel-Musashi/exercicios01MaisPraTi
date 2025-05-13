// console.log("A gíria 'mané' é muito utilizada no RJ")
// console.log('A gíria "mané" é muito utilizada no RJ')
// console.log('Gabriel Marques')
// console.log('Gabriel Marques')
// console.log(typeof("olá mundo"))
// console.log(typeof(1.5))

// console.log(typeof('10'), 1000, 'Geralt of Rivia')

// let name = 'Jaques'
// console.log(name)

// var anotherName = 'Hyago'
// console.log(anotherName)

// const CITY = "Alagoas"
// // CITY = "Mossoró"

// let test
// console.log(test)
// test = 'teste'
// console.log(test)

// let titulosDoInter = null
// console.log(typeof(titulosDoInter))

// let num1 = 2
// let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

// ()
// **
// * /
// + -

//  let num = "10"
// console.log(parseInt(num) + 10)

// let counter = 1;

// console.log(--counter)
// console.log(counter)

// let step = 12

// counter += step
// counter += step
// counter += step
// counter += step
// counter += step

// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)

// console.log(10 == 10)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 === '10')
// console.log(10 != 10)
// console.log(10 !== '10')

// console.log((10 < 5) && (10 > 2))
// console.log((10 > 2) || (10 > 5))

// let usuario = 'Gabriel'
// let senha = "1234"

// let autenticacao = usuario === 'Gabriel' && senha === "1234"

// console.log(autenticacao)

// const nota = 100
// if(nota < 60) {
//     console.log('reprovado')
// } else if (nota > 90) {
// console.log("bichão mesmo")
// } else {
//     console.log('aprovado')
// }

// (nota < 60) ? console.log('reprovado') : console.log('aprovado')

// let num = 5
// if(num % 2 === 0) {
//     console.log('é par!')
// } else {
//     console.log ('é ímpar!')
// }

// let num1 = 4
// let num2 = 6
// let num3 = 8

// if num1 > num2 && num3 {
//     console.log("número 1 é o maior")
// } else if num2 > num1 && num3 {
//     console.log("número 2 é o maior")
// } else {
//     console.log ("número 3 é o maior!")
// }

// if (num1 > num2 && num1 > num3) {
//     console.log('número 1 é o maior');
// } else if (num2 > num1 && num2 > num3) {
//     console.log("número 2 é o maior");
// } else {
//     console.log("número 3 é o maior!");
// }


// let numeroParImpar = 110

// numeroParImpar % 2 === 0 ? console.log('PAR!') : console.log('IMPAR!')

// let num1 = 2
// let num2 = 1
// let num3 = 5

// if((num1 > num2) && (num1 > num3)) {
//     console.log('O primeiro número é o maior!')
// } else if ((num2 > num1) && (num2 > num3)){
//     console.log('O segundo número é o maior!')
// }
// else if ((num3 > num1) && (num3 > num2)){
//     console.log('O terceiro número é o maior!')
// }
// else {
//     console.log ('números são iguais ou há empate entre dois ou mais números')
// }

// let maior = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3)
// console.log(maior) 

//Exercício 3: façam uma calculadora simples utilizando entrada de usuácons

// const prompt = require('prompt-sync')()

// let valor1 = Number (prompt("insira o primeiro valor:"))
// let valor2 = Number (prompt("insira o segundo valor:"))
// let op = prompt('Informe a operação desejada: (+, -, /, *): ')
// let resultado = 0

// if (op === '+'){
//     resultado = valor1 + valor2
// } else if (op === '-'){
//     resultado = valor1 - valor2
// } else if(op === '*'){
//     resultado = valor1 * valor2
// } else if (op === '/'){
//     if(valor2 !==0){
//     resultado = valor1 / valor2
// } else {
//     console.log('Erro: divisão por zero')
//     resultado = undefined
// } else {
//     console.log('Operação Inválida')
//     resultado = undefined
// }

// if(resultado !== undefined){
//     console.log("Resultado: ", resultado)
// }



// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt("Insira o primeiro valor: "))
// let valor2 = Number(prompt("Insira o segundo valor: "))
// let op = prompt('Informe a operação desejada: (+, -, /, *): ')
// let resultado = 0

// if (op === '+') {
//     resultado = valor1 + valor2
// } else if (op === '-') {
//     resultado = valor1 - valor2
// } else if (op === '*') {
//     resultado = valor1 * valor2
// } else if (op === '/') {
//     if (valor2 !== 0) {
//         resultado = valor1 / valor2
//     } else {
//         console.log('Erro: divisão por zero')
//         resultado = undefined
//     }
// } else {
//     console.log('Operação inválida')
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log("Resultado: ", resultado)
// }


// let valor1 = Number(prompt("Insira o primeiro valor: "))
// let valor2 = Number(prompt("Insira o segundo valor: "))
// let op = prompt('Informe a operação desejada: (+, -, /, *): ')
// let resultado = 0

// switch (op) {
//     case '+':
//         resultado = valor1 + valor2
//         break
//     case '-'
//     resultado = valor1 - valor2
//       break
//     case '*'
//     resultado = valor1 * valor2
// break
// case '/':
//     if 

//Exercício 2: verificar se um número é positivo, negativo ou zero
//Exercício 3: verificar se é bissesto
//Exercício 4: definam faixas etárias para crianças, adolescente e adultos e com switch apresentem na tela se a pessou que informou a idade está em uma e qual a faixa etária

// let contadora = 0

// while(contadora < 10){
//     console.log(contadora)
//     contadora = contadora + 1
// }

// console.log ('Salve o tricolor gaúcho')


// const prompt = require('prompt-sync')()
// let numero = Number(prompt("Insira o valor: "))
// let multi = 1

// while (multi <= 10){
//     console.log(numero, 'x', multi, '=', numero * multi)
//     multi = multi + 1
// }


// const prompt = require('prompt-sync')()
// let numeroTabuada = Number(prompt('Qual o número quer saber a tabuada?'))

// let contadora = 1

// while (contadora <= 10) {
//     console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}`)

//     contadora ++
// }

// const prompt = require('prompt-sync')()

// let contadora = 0

// while (contadora <= 10) {
//     console.log (contadora += 2)
    
// }

// const prompt = require('prompt-sync')()

// let contadora = 10

// while (contadora >= 0) {
//     console.log(contadora)
//     contadora --
// }

