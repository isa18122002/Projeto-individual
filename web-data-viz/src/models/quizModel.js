var database = require("../database/config")

function inserirPontuacao(pontuacao, fkUsuario) {

    var instrucaoSql = `
        INSERT INTO quiz (nome, acertos, qtdPerguntas, fkUsuario) VALUES ('Quiz de Terror', '${pontuacao}', 10, '${fkUsuario}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPontuacoes(idUsuario) {
    const instrucaoSql = `
        SELECT acertos 
        FROM quiz 
        WHERE fkUsuario = ${idUsuario}
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirPontuacao,
    listarPontuacoes
}
