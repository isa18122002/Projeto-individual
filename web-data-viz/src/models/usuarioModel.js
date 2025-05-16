var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nome, email, fkPersonagem FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, telefone, email, senha, fkPersonagem) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, telefone, email, senha, fkPersonagem) VALUES ('${nome}', '${sobrenome}', '${telefone}', '${email}', '${senha}', '${fkPersonagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    autenticar,
    cadastrar
};