function validarCadastro() {
    // Obtendo os valores dos campos
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    // Limpando qualquer mensagem de erro anterior
    mensagemErro.innerHTML = "";

    // Validação do nome e sobrenome
    if (nome.trim() === "" || sobrenome.trim() === "") {
        mensagemErro.innerHTML = "Nome e Sobrenome são obrigatórios.";
        return false; 
    }

    // Validação do telefone (11 dígitos)
    var regexTelefone = /^\d{11}$/;
    if (!regexTelefone.test(telefone)) {
        mensagemErro.innerHTML = "O telefone deve conter exatamente 11 dígitos.";
        return false; 
    }

    // Validação do e-mail
    if (!email.includes("@")) {
        mensagemErro.innerHTML = "O e-mail deve conter '@'.";
        return false; 
    }

    
    var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regexSenha.test(senha)) {
        mensagemErro.innerHTML = "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.";
        return false; 
    }

    
    alert("Cadastro bem-sucedido!");
    return true; 
}
