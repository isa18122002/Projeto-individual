if (!localStorage.getItem("usuarioLogado")) {
  alert("Você precisa estar logado para acessar a dashboard.");
  window.location.href = "login.html";
}

const resultado = JSON.parse(localStorage.getItem("resultadoQuizz"));
if (!resultado) {
  alert("Você precisa concluir o quizz para acessar a dashboard.");
  window.location.href = "quizz.html";
}

const acertos = resultado.acertos || 0;
const erros = resultado.erros || 0;
const total = acertos + erros;
const porcentagem = total === 0 ? 0 : Math.round((acertos / total) * 100);
const perguntas = resultado.perguntas || [];

const perguntaMaisErrada = perguntas.reduce((mais, atual) =>
  atual.erros > (mais?.erros || 0) ? atual : mais, null);

const perguntaMaisCerta = perguntas.reduce((mais, atual) =>
  atual.acertos > (mais?.acertos || 0) ? atual : mais, null);

// KPIs
document.getElementById("kpis").innerHTML = `
  <div class="kpi green">Total de Acertos<span>${acertos}</span></div>
  <div class="kpi red">Total de Erros<span>${erros}</span></div>
  <div class="kpi gray">Total de Perguntas<span>${total}</span></div>
  <div class="kpi gray">Porcentagem de Acerto<span>${porcentagem}%</span></div>
`;

new Chart(document.getElementById("graficoTotal"), {
  type: 'bar',
  data: {
    labels: ['Acertos', 'Erros'],
    datasets: [{
      data: [acertos, erros],
      backgroundColor: ['green', 'red']
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#fff' } },
      x: { ticks: { color: '#fff' } }
    }
  }
});

new Chart(document.getElementById("graficoMaisErros"), {
  type: 'bar',
  data: {
    labels: [perguntaMaisErrada?.texto || 'Sem dados'],
    datasets: [{
      data: [perguntaMaisErrada?.erros || 0],
      backgroundColor: 'red'
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#fff' } },
      x: { ticks: { color: '#fff' } }
    }
  }
});

new Chart(document.getElementById("graficoMaisAcertos"), {
  type: 'bar',
  data: {
    labels: [perguntaMaisCerta?.texto || 'Sem dados'],
    datasets: [{
      data: [perguntaMaisCerta?.acertos || 0],
      backgroundColor: 'green'
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#fff' } },
      x: { ticks: { color: '#fff' } }
    }
  }
});
