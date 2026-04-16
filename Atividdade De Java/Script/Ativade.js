confirm("Atividade 1:");
var conta = Number(prompt("Digite o valor da conta:"));
var clientes = Number(prompt("Quantos pessoas tem na mesa?"));

document.getElementById("resposta1").innerHTML = `<h1>Cada pessoa ficará R$${conta / clientes} com ${clientes} clientes</h1>`;

confirm("Atividade 2");
var num = Number(prompt("Digite um número:"));

document.getElementById("resposta2").innerHTML = `<h1>antecessor dele é ${num - 1} e o sucessor é ${1 + num}</h1>`;