function calcularSaldo(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas
    const saldo = vitorias - derrotas;

    // Determina o nível baseado nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Indeterminado";
    }

    // Exibe a mensagem final
    console.log(
        `Herói, você tem um saldo de ${saldo} vitórias e está no nível ${nivel}!`
    );
}

// Exemplo de uso
const vitorias = 55; // Quantidade de vitórias
const derrotas = 20; // Quantidade de derrotas
calcularSaldo(vitorias, derrotas);
