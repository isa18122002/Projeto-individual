function validarLogin() {
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.innerHTML = "";

    let tentativasRestantes = 3;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mensagemErro.innerHTML = "Digite um e-mail válido.";
        return;
    }else{

         fetch("/usuarios/autenticar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emailServer: email,
                    senhaServer: senha
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!")

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                        sessionStorage.EMAIL_USUARIO = json.email;
                        sessionStorage.NOME_USUARIO = json.nome;
                        sessionStorage.ID_USUARIO = json.idUsuario;
                        sessionStorage.FK_PERSONAGEM = json.fkPersonagem;
                        
                        mensagemErro.innerHTML = `Login realizado com sucesso!`;

                        setTimeout(function () {
                            window.location = "quizz.html";
                        }, 1000); // apenas para exibir o loading

                    });

                } else {

                    console.log("Houve um erro ao tentar realizar o login!");

                    tentativasRestantes--;

                    if (tentativasRestantes > 0) {
                        mensagemErro.innerHTML = `Email ou senha incorretos! Você ainda tem ${tentativasRestantes} tentativa(s).`;
                        mensagemErro.style.color = "red";
                    } else {
                        mensagemErro.innerHTML = "Você errou 3 vezes. Acesso bloqueado.";
                        btnEntrar.disabled = true;
                        btnEntrar.style.opacity = "0.5";
                        btnEntrar.style.cursor = "not-allowed";
                    }

                    resposta.text().then(texto => {
                        console.error(texto);
                    });
                }

            }).catch(function (erro) {
                console.log(erro);
            })

            return false;
    }

    
}
