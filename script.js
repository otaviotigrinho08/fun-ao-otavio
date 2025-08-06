const caixaPrincipal = document.querySelectorAll(".caixa-principal");
const caixaPerguntas = document.querySelectorAll(".caixa-perguntas");
const caixaAlternativas = document.querySelectorAll(".caixa-alternativas");
const caixaResultado = document.querySelectorAll(".caixa-resultado");
const textoResultado = document.querySelectorAll(".texto-resultado");

const perguntas = [
{
enunciado:"Pergunta 1",
alternativas:["alternativa1","alternativa2"]
},
{
enunciado:"Pergunta1",
alternativas:["alternativa1","alternativa2"]
},
{
enunciado:"Pergunta1",
alternativas:["alternativa1","alternativa2"]
},
{
enunciado:"Pergunta1",
alternativas:["alternativa1","alternativa2"]
 },
{
enunciado:"Pergunta1",
alternativas:["alternativa1","alternativa2"]
 }
];

let atual = 0;
let perguntaAtual;
function mostraPergunta(){
perguntaAtual = perguntas [atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta()