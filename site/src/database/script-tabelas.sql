-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE usuario(
id_usuario int primary key auto_increment,
nome varchar (45),
nomeUsuario varchar (45) unique,
email varchar (45),
senha varchar (45)
);

CREATE TABLE quiz (
id_quiz int primary key auto_increment
);

CREATE TABLE resultado(
fk_usuario int,
fk_quiz int,
resposta1 char (1), 
resposta2 char (1), 
resposta3 char (1), 
resposta4 char (1), 
resposta5 char (1), 

constraint fkResultadoUsuario 
	foreign key (fk_usuario) 
		references usuario(id_usuario),
        
constraint fkResultadoQuiz 
	foreign key (fk_quiz) 
		references quiz(id_quiz)
);









