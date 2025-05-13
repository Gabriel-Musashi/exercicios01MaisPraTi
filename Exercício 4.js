// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require("prompt-sync")();

let opcao = prompt("Escolha a dificuldade: \n1. Fácil\n2. Médio\n3. Difícil\n");

switch (opcao) {
    case "1":
        console.log("Você escolheu a dificuldade fácil");
        break;
    case "2":
        console.log("Você escolheu a dificuldade média");
        break;
    case "3":
        console.log("Você escolheu a dificuldade difícil");
        break;
    default:
        console.log("Você precisa escolher uma das dificuldades!");
        break;
}
