
const nomeJogador = "GamerPro99"; 


let idade = 16;                   
let isOnline = true;              


const jogoFavorito = {
    nome: "Valorant",
    anoLancamento: 2020
};


const ultimasPontuacoes = [2400, 2850, 3100];




console.log("--- VALORES E TIPOS INICIAIS ---");

console.log("Nome:", nomeJogador, "-> Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "-> Tipo:", typeof idade);
console.log("Está Online?:", isOnline, "-> Tipo:", typeof isOnline);


console.log("Jogo Favorito:", jogoFavorito, "-> Tipo:", typeof jogoFavorito);
console.log("Últimas Pontuações:", ultimasPontuacoes, "-> Tipo:", typeof ultimasPontuacoes);



console.log("\n--- TESTANDO ALTERAÇÕES ---");


idade = 17;
isOnline = false;


console.log("Nova Idade:", idade);
console.log("Novo Status Online:", isOnline);

