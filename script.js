const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual o futuro da IA?",
    alternativas: [
      "A - No futuro, a inteligência artificial dominará completamente os humanos e tomará controle total do mundo.",
      "B - Espera-se que a IA continue a evoluir, tornando-se mais sofisticada."
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
      "A - Depende de como for usada.",
      "B - A IA sempre vai reduzir a desigualdade, pois todo mundo já tem acesso à tecnologia."
    ]
  },
  {
    enunciado: "Você acredita que a IA vai dominar o mundo?",
    alternativas: [
      "A - Sim, a IA vai dominar o mundo em breve.",
      "B - A inteligência artificial é uma ferramenta poderosa que pode transformar vários aspectos da vida humana."
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
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar a pergunta atual
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  mostraAlternativas();
}

// Função para mostrar as alternativas da pergunta atual
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

// Função que lida com o clique da resposta
function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada + " ";
  atual++;
  mostraPergunta();
}

// Mostra o resultado final
function mostraResultado() {
  caixaPrincipal.style.display = "none";
  caixaResultado.style.display = "block";
  textoResultado.textContent = "Suas respostas: " + historiaFinal;
}

// Inicia o quiz
mostraPergunta();