function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5,10));

function clicou() {
    alert("Voce clicou!");
    console.log(document.getElementById("click"));
    document.getElementById("click").innerHTML = "Obrigado por clicar";

}

function trocar(elemento) {
    //document.getElementById("trocar").innerHTML = "trocado";
    elemento.innerHTML = "trocado";
}

function voltar(elemento) {
    //document.getElementById("trocar").innerHTML = "trocar";
    elemento.innerHTML = "trocar";
}

function mude(elemento) {
    console.log(elemento.value);
}

/*
var nome = "Cesar Kazuo";
var idade = 42;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//list.pop();

console.log(lista);
console.log(lista.toString);
console.log(lista.join(" - "));

var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"},
              {nome: "uva", cor: "verde"}];
console.log(frutas);
alert(frutas[1].cor);
*/

/*
console.log("count while");
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

console.log("count for");
for (count=0; count<5; count++) {
    console.log(count);
}

var idade = prompt("Qual sua idade?");
if  (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var d = new Date();
console.log(d);
console.log(d.getMonth);
console.log(d.getMinutes);
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
*/

