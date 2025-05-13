// let listaFrutas = Array()
// let listaNomes = ['Giovanna', 'Augusto']

// listaFrutas[0] = 10
// listaFrutas[1] = 'morango'
// listaFrutas['adocicadas'] = 'pera'

// for(let i = 0; i < listaFrutas.length; i++)
// {
//     console.log(listaFrutas [i])
// }
// console.table(listaFrutas)

// listaFrutas.push('melancia')
// listaFrutas.unshift('Laranja')

// listaFrutas.pop()
// listaFrutas.shift()

// console.table(listaFrutas)


// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular;

// A soma de todos os elementos.

// A média dos elementos.
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// let pares = numeros.filter((num => num % 2 === 0))


// // let soma = 0
// let media = 0
// // let pares = []

// // for(let i = 0; i < numeros.length; i++){
// //     soma += numeros[i]
// //     if(numeros[i] % 2 === 0){
// //         pares.push(numeros[i])
// //     }
// // }

// media = soma/numeros.length

// console.log(soma)
// console.log(media)
// console.table(pares)

// Ordene o array numeros em ordem crescente

// let numeros = [3, 6, 1, 2, -3]
// let n = numeros.length

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         if(numeros[j] > numeros[j + 1]){
//             let temp = numeros[j]
//             numeros[j] = numeros[j + 1]
//             numeros[j + 1] = temp       
//         }
//     }
// }

// console.log(numeros)
// console.log(numeros.sort((a , b) => a - b))

// let matriz = []

// for (let i = 0; i < 3; i++){
//     matriz[i] = []

//     for (let j = 0; j < 3; j++){
//         matriz[i][j] = 10
//     }
// }

// let mercado = []
// mercado ['fruteira'] = ['maca', 'abacate', 'pera']
// mercado ['acougue'] = ['picanha', 'alcatra', 'file']

// console.table(mercado)
// console.table(matriz)

let listaCoisas = {}

listaCoisas['hardware'] = []
listaCoisas['hardware'][0] = 'Placa de Vídeo'
listaCoisas['hardware'][1] = 'Smartwatch'

listaCoisas['games'] = []
listaCoisas['games'][0] = 'GTA VI'
listaCoisas['games'][1] = 'The Witcher'

console.table(listaCoisas)