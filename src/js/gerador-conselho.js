let botao = document.getElementById('btn');
let titulo = document.getElementById('nome-titulo');
let frase = document.getElementById('frase');

botao.addEventListener('click', gerarUmConselhoAleatorio);

async function criarConselho(){
    const url = 	"https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
} 

async function gerarUmConselhoAleatorio(){
    const conselho = await criarConselho();
    titulo.innerHTML = "advice #" + conselho.slip.id;
    frase.innerHTML = conselho.slip.advice;

}

gerarUmConselhoAleatorio()