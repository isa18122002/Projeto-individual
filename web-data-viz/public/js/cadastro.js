function validarCadastro() {
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sobrenome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.innerHTML = "";
    var erros = [];

    if (nome === "" || sobrenome === "") {
        erros.push("Nome e Sobrenome são obrigatórios.");
    }

    if (!/^\d{11}$/.test(telefone)) {
        erros.push("O telefone deve conter exatamente 11 dígitos.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erros.push("Digite um e-mail válido.");
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha)) {
        erros.push("A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.");
    }

    if (confirmaSenha === "") {
        erros.push("A confirmação de senha não pode ficar vazia.");
    } else if (senha !== confirmaSenha) {
        erros.push("As senhas não conferem.");
    }

    if (erros.length > 0) {
        mensagemErro.innerHTML = erros.join("<br>");
        return false;
    }

    alert("Cadastro bem-sucedido!");
    return true;
}
