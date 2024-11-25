var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.put("/melhorarEstatistica", function (req, res) {
  estatisticaController.melhorarEstatistica(req, res);
});

router.put("/diminuirEstatistica", function (req, res) {
  estatisticaController.diminuirEstatistica(req, res);
});

router.get("/pesquisarDados/:id_usuario", function (req, res) {
  estatisticaController.pesquisarDados(req, res);
});



module.exports = router;