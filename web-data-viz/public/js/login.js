function validarLogin() {
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.innerHTML = "";

    var erros = [];

    const emailsCadastrados = ['usuario1@exemplo.com', 'usuario2@exemplo.com', 'usuario3@exemplo.com'];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erros.push("Digite um e-mail válido.");
    } else if (!emailsCadastrados.includes(email)) {
        erros.push("Este e-mail não está cadastrado.");
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha)) {
        erros.push("A senha deve ter pelo menos 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.");
    }

    if (erros.length > 0) {
        mensagemErro.innerHTML = erros.join("<br>");
        return false;
    }

    alert("Login bem-sucedido!");
    return true;
}
