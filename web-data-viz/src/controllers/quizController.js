var quizModel = require("../models/quizModel");

function inserirPontuacao(req, res){

    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    
    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.inserirPontuacao(pontuacao, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio da pontuacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarPontuacoes(req, res) {
    const idUsuario = req.params.idUsuario;

    quizModel.listarPontuacoes(idUsuario)
        .then(result => res.json(result))
        .catch(erro => {
            console.error("Erro ao buscar pontuações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    inserirPontuacao,
    listarPontuacoes
}