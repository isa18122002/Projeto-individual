function validarLogin() {
    // Passo 1: Obtendo os valores dos campos
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    // Passo 2: Limpando qualquer mensagem de erro anterior
    mensagemErro.innerHTML = "";

    // Passo 3: Lista de e-mails cadastrados
    var emailsCadastrados = ['usuario1@exemplo.com', 'usuario2@exemplo.com', 'usuario3@exemplo.com'];  // Exemplo de lista de e-mails cadastrados

    // Passo 4: Validação do e-mail
    if (!email.includes("@")) {
        mensagemErro.innerHTML = "O e-mail deve conter '@'.";
        return false; // Bloqueia o envio do formulário
    }

    // Passo 5: Verificando se o e-mail está cadastrado
    var emailValido = emailsCadastrados.indexOf(email) !== -1; // Verifica se o e-mail está na lista
    if (!emailValido) {
        mensagemErro.innerHTML = "Este e-mail não está cadastrado.";
        return false; // Bloqueia o envio do formulário
    }

    // Passo 6: Validação da senha (usando expressão regular simplificada)
    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/\d/.test(senha) || !/[\W_]/.test(senha)) {
        mensagemErro.innerHTML = "A senha deve ter pelo menos 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.";
        return false; // Bloqueia o envio do formulário
    }

    // Passo 7: Se tudo estiver correto, exibe a mensagem de sucesso
    alert("Login bem-sucedido!");
    return true; // Permite o envio do formulário
}
