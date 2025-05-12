document.getElementById('formQuizz').addEventListener('submit', function(event) {
    event.preventDefault();

    const respostasCorretas = {
        q1: 'c',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'a',
        q6: 'c',
        q7: 'b',
        q8: 'a',
        q9: 'b',
        q10: 'c'
    };

    let pontuacao = 0;

    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta && resposta.value === respostasCorretas[`q${i}`]) {
            pontuacao++;
        }
    }

    const resultado = document.getElementById('resultado');
    let mensagem = `<p>Você acertou ${pontuacao} de 10 perguntas!</p>`;

    if (pontuacao === 10) {
        mensagem += "<p>🎃 Mestre do terror! Você conhece todos os cantos sombrios do cinema!</p>";
    } else if (pontuacao >= 7) {
        mensagem += "<p>👻 Muito bem! Você está pronto para uma maratona assustadora!</p>";
    } else if (pontuacao >= 4) {
        mensagem += "<p>😱 Você conhece um pouco, mas ainda tem pesadelos para enfrentar!</p>";
    } else {
        mensagem += "<p>💀 Hora de assistir mais filmes… o medo te espera.</p>";
    }

    resultado.innerHTML = mensagem;
});
