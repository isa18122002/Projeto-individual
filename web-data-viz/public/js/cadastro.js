function validarCadastro() {
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var telefone = document.getElementById('telefone').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var confirmaSenha = document.getElementById('confirmaSenha').value;
        var fkPersonagem = document.getElementById('select_personagem').value;
        var mensagemErro = document.getElementById('mensagemErro');

        mensagemErro.innerHTML = "";

        if (fkPersonagem == '#') {
            mensagemErro.innerHTML = "Escolha um personagem favorito!";
            return;
        }

        if (nome === "" || sobrenome === "") {
            mensagemErro.innerHTML = "Nome e Sobrenome são obrigatórios.";
            return;
        }


        if (!/^\d{11}$/.test(telefone)) {
            mensagemErro.innerHTML = "O telefone deve conter exatamente 11 dígitos.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mensagemErro.innerHTML = "Digite um e-mail válido.";
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha)) {
            mensagemErro.innerHTML = "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.";
            return;
        }

        if (confirmaSenha === "") {
            mensagemErro.innerHTML = "A confirmação de senha não pode ficar vazia.";
            return;
        } else if (senha !== confirmaSenha) {
            mensagemErro.innerHTML = "As senhas não conferem.";
            return;
        }

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nome,
                sobrenomeServer: sobrenome,
                telefoneServer: telefone,
                emailServer: email,
                senhaServer: senha,
                fkPersonagemServer: fkPersonagem
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    mensagemErro.innerHTML = "Cadastro realizado com sucesso!";

                    setTimeout(() => {
                        window.location = 'login.html'
                    }, "2000");
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return;
    }