
const nomeJogador = "Eric_99";
let idade = 16;               
let isOnline = true;         


const jogoFavorito = {
    nome: "Cyberpunk 2077",
    anoLancamento: 2020
};


const ultimasPontuacoes = [2500, 3100, 2850];

console.log("--- EXIBINDO OS DADOS INICIAIS ---");

console.log("Nome:", nomeJogador, "| Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "| Tipo:", typeof idade);
console.log("Está Online?:", isOnline, "| Tipo:", typeof isOnline);


console.log("Jogo Favorito:", jogoFavorito, "| Tipo:", typeof jogoFavorito);
console.log("Últimas Pontuações:", ultimasPontuacoes, "| Tipo:", typeof ultimasPontuacoes);

console.log("\n--- TESTANDO ALTERAÇÕES ---");


idade = 17;
isOnline = false;

console.log("Nova Idade:", idade);
console.log("Novo Status Online:", isOnline);
