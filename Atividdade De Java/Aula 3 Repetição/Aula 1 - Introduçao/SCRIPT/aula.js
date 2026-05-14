// Resposta no Console
console.log("Ola Mundo!");

// Caixas De Dialogo
// alert("FRONT E A MATERIA MAIS FODA");
// prompt("Qual e o seu nome?");
// confirm("Voce faria um pix para seu colega?");

// acessa documento, busca o elemento com id selecionado
// inner = dentro
document.getElementById("resposta").innerText =  "<h1> Ondas Cerebrais </h1>";
document.getElementById("resposta").innerHTML = "<h1> Ondas Cerebrais </h1>";

// atring - caractere ("DavyJones")
var nome = "DavyJones";
// boolean - logico ('verdadeiro' true, 'falso' - false)
var ligado = true;

// number - numero (80) 
// *obs, para numeros quebrados - float()
// *obs para numeros inteiros - int()
var idade = 16;
var dinheiro = 108.50;

// array - lista , vetor
var listaCompras = []
console.log(typeof(nome)); 
console.log(typeof(ligado)); 
console.log(typeof(idade));
console.log(typeof(dinheiro));
console.log(typeof(listaCompras));