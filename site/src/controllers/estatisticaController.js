var estatisticaModel = require("../models/estatisticaModel");

function melhorarEstatistica(req, res) {
  var id_usuario = req.body.id_usuarioServer;
  console.log('no controller ' + id_usuario)
  var campo_melhora = req.body.campo_melhoraServer;

  estatisticaModel.melhorarEstatistica(id_usuario, campo_melhora)
  .then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao acrescentar: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function diminuirEstatistica(req, res) {
  var id_usuario = req.body.id_usuarioServer;
  var campo_melhora = req.body.campo_melhoraServer;

  estatisticaModel.diminuirEstatistica(id_usuario, campo_melhora)
  .then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao diminuir: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function pesquisarDados(req, res) {
  var id_usuario = req.params.id_usuario;

  estatisticaModel.pesquisarDados(id_usuario)
  .then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao atualizar: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  melhorarEstatistica,
  diminuirEstatistica,
  pesquisarDados
}