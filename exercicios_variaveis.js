/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "isac";
console.log ("tipo da variavel", typeof nome);
console.log ("Meu nome e: Isac")

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.

let numero = 2; // cria um numero
console.log("numero inicial",numero);
numero = numero + 3; // soma o numero inicial com mais 3
console.log("depois somar com mais 3",numero);

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.

const lista = []; // Cria uma constante vazia
lista.push("Classic");
lista.push("corola");
lista.push("civis");

console.log(lista) //ele exibe a lista

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var mensagem = "isso e a variavel if";
}
console.log(typeof mensagem)
console.log("fora do bloco", mensagem);

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).

if (true) {
    let mensagem = "sou uma variavel dentro let";
}
console.log(typeof mensagem)
 console.log("fora do bloco", mensagem); // isso vai gerar um erro pois a mensagem de exibição ta fora do bloco criado

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.

if (true){
    var nome= "Isac";
    let = sobrenome = "Bruno";

    console.log("chamando a varaiavel nome:" , nome);
    console.log("chamando a variave sobrenome:", sobrenome);
}
    var nome ="Leticia";
    let sobrenome = "Cristina";
    console.log("redeclarando a variavel nome:" ,nome);
    console.log("redeclarando a variavel sobrenome:" , sobrenome);

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.

const pessoa = {
    nome: "Isac",
    idade: 30
};
pessoa.idade = 31;

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let = nome;
nome = "isac";
console.log("exibir", nome);

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
if(true){
    console.log("variavel e:", nome);

    var nome = "Isac";
}
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function  declararVariavel() {
    var mensagem = "Olá, mundo";
    return mensagem
};
console.log("mensagem fora da função:", declararVariavel())