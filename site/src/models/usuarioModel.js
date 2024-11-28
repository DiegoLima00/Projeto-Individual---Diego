var database = require("../database/config")

function autenticar(nomeUsuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nomeUsuario, senha)
    var instrucaoSql = `
        SELECT id_usuario, nome, nomeUsuario, email FROM usuario WHERE nomeUsuario = '${nomeUsuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, nomeUsuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, nomeUsuario, email, senha);
    
    var instrucaoSql = `
        INSERT INTO usuario (nome, nomeUsuario, email, senha) 
        VALUES ('${nome}', '${nomeUsuario}', '${email}', '${senha}');
    `;

    var instrucaoSql2 = `
                INSERT INTO estatistica (fk_usuario) 
                VALUES ((SELECT id_usuario FROM usuario WHERE email = '${email}'));
            `; 

        return database.executar(instrucaoSql)
        .then((resultado) => {
            console.log(resultado)

            return database.executar(instrucaoSql2);
        })
        .catch((erro) => {
            console.log('Erro na transação: ');
        });

}

module.exports = {
    autenticar,
    cadastrar
};