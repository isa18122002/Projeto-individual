  const usuarioId = sessionStorage.ID_USUARIO;
  const ctx = document.getElementById("grafico").getContext("2d");
  let chart;

  function carregarGrafico() {

    fetch(`/quiz/pontuacao/${usuarioId}`)
      .then(res => res.json())
      .then(data => {
        
        if (data.length === 0) {
          alert(`O usuário de ID ${usuarioId} não possui registros nesse quiz.`);
          if (chart) chart.destroy();
          return;
        }

        const labels = data.map((_, index) => `Tentativa ${index + 1}`);
        const pontuacoes = data.map(item => item.acertos);
        const erros = data.map(item => (10 - item.acertos));

        if (chart) chart.destroy();
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Pontuação',
                data: pontuacoes,
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                borderColor: '#00d704',
                borderWidth: 2
              },
              {
                label: 'Erros',
                data: erros,
                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                borderColor: 'red',
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                ticks: {
                  color: 'white'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)'
                }
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: 'white'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)'
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: 'white'
                }
              }
            }
          }
        });
      });
  }

  window.onload = () => {
    carregarGrafico();
  };