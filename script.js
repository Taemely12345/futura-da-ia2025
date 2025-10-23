
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.getElementById("reiniciar");


const perguntas = [
  {
    enunciado: "Qual o futuro da IA?",
    alternativas: [
      "A - No futuro, a inteligência artificial dominará completamente os humanos e tomará controle total do mundo.",
      "B - Espera-se que a IA continue a evoluir, tornando-se mais sofisticada e útil."
    ]
  },
  {
    enunciado: "Como garantir que a IA não seja usada de forma perigosa?",
    alternativas: [
      "A - Criando leis, limites éticos e sistemas de controle.",
      "B - Deixando que a IA aprenda tudo sozinha, sem regras, porque ela sabe melhor que os humanos."
    ]
  },
  {
    enunciado: "A IA vai aumentar ou reduzir a desigualdade social?",
    alternativas: [
      "A - Depende de como for usada e distribuída.",
      "B - A IA sempre vai reduzir a desigualdade, pois todo mundo já tem acesso à tecnologia."
    ]
  },
  {
    enunciado: "Você acredita que a IA vai dominar o mundo?",
    alternativas: [
      "A - Sim, a IA vai dominar o mundo em breve.",
      "B - A IA é uma ferramenta poderosa que pode transformar positivamente a vida humana."
    ]
  },
  {
    enunciado: "IA e Robótica são a mesma coisa?",
    alternativas: [
      "A - Sim.",
      "B - Não."
    ]
  }
];

let atual = 0;
let historiaFinal = "";
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach(alternativa => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  });
}


function respostaSelecionada(opcao) {
  historiaFinal += `\n${opcao}`;
  atual++;
  mostraPergunta();
}


function mostraResultado() {
  caixaPrincipal.style.display = "none";
  caixaResultado.style.display = "block";
  textoResultado.textContent = "Suas respostas:\n" + historiaFinal;
}


botaoReiniciar.addEventListener("click", () => {
  atual = 0;
  historiaFinal = "";
  caixaResultado.style.display = "none";
  caixaPrincipal.style.display = "block";
  mostraPergunta();
});


mostraPergunta();


