var database = require("../database/config");

function melhorarEstatistica(id_usuario, campo_melhora) {

  var instrucaoSql = `
    UPDATE estatistica SET ${campo_melhora} = ${campo_melhora} + 2
    	WHERE fk_usuario = ${id_usuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function diminuirEstatistica(id_usuario, campo_melhora) {

  var instrucaoSql = `
    UPDATE estatistica SET ${campo_melhora} = ${campo_melhora} - 2
    	WHERE fk_usuario = ${id_usuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pesquisarDados(id_usuario) {
  
  var instrucaoSql = `
  select ritmo, passe, finalizacao, drible, defesa, fisico from estatistica join usuario on fk_usuario = id_usuario
	WHERE fk_usuario = ${id_usuario};`

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

// function cadastrarResultado(id_usuario, descricao) {
  
//   var instrucaoSql = `INSERT INTO resultado (resposta1, resposta2, resposta3, resposta4, resposta5) VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  melhorarEstatistica,
  diminuirEstatistica,
  pesquisarDados
}
