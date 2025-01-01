function playRockPaperScissor(player1, player2) {
    if (player1 == "Pedra") {
        if (player2 == "Pedra") {
            return "Empate!"
        }
        else if (player2 == "Papel") {
            return "Jogador 2 venceu!"
        } else {
            return "Jogador 1 venceu!"
        }
    } else if (player1 == "Papel") {
        if (player2 == "Pedra") {
            return "Jogador 1 venceu!"
        } else if (player2 == "Papel") {
            return "Empate!"
        } else {
            return "Jogador 2 venceu!"
        }
    } else {
        if (player2 == "Pedra") {
            return "Jogador 2 venceu!"
        } else if (player2 == "Papel") {
            return "Jogador 1 venceu!" 
        } else {
            return "Empate!"
        }
    }
}

const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado);
