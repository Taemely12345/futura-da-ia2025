const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector("caixa-perguntas");
const caixaAlternativas =document.querySelector("caixa-alternativas");
const caixaResultado =document.querySelector("caixa-resultado");
const textoResultado =document.querySelector("texto-resultado");

const perguntas =[
    {

  enunciado:Qual o futuro da IA?
  alternativa:[
   " A-No futuro,a inteligência artificial dominarà completamente os humanos e tomarà controle total do mundo.
   " B-Espera-se que a IA continue a evoluir,tornando-se mais sofisticada"
]
 }
{
    enunciado:
Como garantir que a IA não seja usada de forma perigosa?
A-Criando leis limites eticos e sistema de contole.
B-Deixando que a IA aprenda tudo sozinha,sem regras,porque ela sabe melhor que os humanos.
]
}
{
  enunciado:
  A IA vai aumentar ou reduzir a desigualdade social?
  A-Depende de como for usada.
  B-A IA sempre vai reduzir a desigualdade, por todo mundo jà tem acesso a tecnologia.
  ]
  }
  {
   enunciado:
   Você acredita que a IA vai dominar o mundo?
   A-Sim a IA vai dominar o mundo em breve.
   B-A inteligência artificial é uma ferramenta poderosa que pode transformas aspectos.
]
}
{
  enunciado:
  IA e Robótica são a mesma coisa?
  A-Sim
  B-não
  ]
  }
  }

  let atual = 0;
  let perguntasAtual;

  function mostraPerguntas() {
    perguntasAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas.enunciado;
    mostraAlternativas();
  }

function mostraAlternativas() {
    for(const alternativas of perguntasAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPerguntas();










];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPerguntas() {
    perguntasAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
    }

    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada (alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal+= afirmacoes+" ";
        atual++;
        monstraPergunta();
    }