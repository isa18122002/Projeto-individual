const perguntas = [
  {
    pergunta: "Qual é o nome do assassino em 'Pânico'?",
    opcoes: ["Michael", "Jason", "Ghostface", "Freddy"],
    resposta: "Ghostface"
  },
  {
    pergunta: "Quem é o vilão em 'Halloween'?",
    opcoes: ["Michael Myers", "Chucky", "Leatherface", "Hannibal"],
    resposta: "Michael Myers"
  },
  {
    pergunta: "Em que filme aparece o palhaço Pennywise?",
    opcoes: ["It: A Coisa", "O Iluminado", "Corra!", "Invocação do Mal"],
    resposta: "It: A Coisa"
  },
  {
    pergunta: "Qual desses filmes é de terror psicológico?",
    opcoes: ["O Iluminado", "Chucky", "Pânico", "Atividade Paranormal"],
    resposta: "O Iluminado"
  },
  {
    pergunta: "Em que filme uma boneca chamada Annabelle aparece?",
    opcoes: ["Invocação do Mal", "Chucky", "Jogos Mortais", "It: A Coisa"],
    resposta: "Invocação do Mal"
  },
  {
    pergunta: "Quem dirige 'O Iluminado'?",
    opcoes: ["Stanley Kubrick", "Wes Craven", "John Carpenter", "James Wan"],
    resposta: "Stanley Kubrick"
  },
  {
    pergunta: "Qual é o vilão de 'A Hora do Pesadelo'?",
    opcoes: ["Freddy Krueger", "Jason", "Pennywise", "Billy"],
    resposta: "Freddy Krueger"
  },
  {
    pergunta: "Onde se passa 'Massacre da Serra Elétrica'?",
    opcoes: ["Texas", "Louisiana", "Ohio", "Flórida"],
    resposta: "Texas"
  },
  {
    pergunta: "Qual é o nome da entidade em 'Hereditário'?",
    opcoes: ["Paimon", "Baphomet", "Azazel", "Lilith"],
    resposta: "Paimon"
  },
  {
    pergunta: "Qual desses é um filme de Jordan Peele?",
    opcoes: ["Corra!", "Sobrenatural", "Annabelle", "Halloween Ends"],
    resposta: "Corra!"
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = pergunta.pergunta;
  optionsEl.innerHTML = "";

  pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(opcao);
    optionsEl.appendChild(botao);
  }); 
}

function verificarResposta(resposta) {
  const respostaCorreta = perguntas[perguntaAtual].resposta;
  if (resposta === respostaCorreta) {
    pontuacao++;
  }
  document.getElementById("next-button").style.display = "block";
}

document.getElementById("next-button").addEventListener("click", () => {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    document.getElementById("next-button").style.display = "none";
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;

  var fkUsuario = sessionStorage.ID_USUARIO;

  fetch("/quiz/inserirPontuacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pontuacaoServer: pontuacao,
          fkUsuarioServer: fkUsuario
        }),
      })
        .then(response => {
          if (!response.ok) {
            return response.text().then(texto => {
              console.error("Erro na resposta do backend:", texto);
            });
          } else {
            console.log("Requisição bem-sucedida");
          }
        })
        .catch(erro => {
          console.error("Erro na requisição:", erro);
        });
}

function reiniciarQuizz() {
  perguntaAtual = 0;
  pontuacao = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  mostrarPergunta();
  document.getElementById("next-button").style.display = "none";
}


window.onload = function () {
  mostrarPergunta();
  document.getElementById("next-button").style.display = "none";
};
