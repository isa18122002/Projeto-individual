create database clubedomedo;

use clubedomedo;

create table personagemFavorito(
idPersonagem int primary key auto_increment,
nome varchar(50)
);

insert into personagemFavorito(nome) values
('Leatherface'),
('Jason Voorhees'),
('Michael Myers'),
('Freddy Krueger');

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
sobrenome varchar(50),
telefone varchar(50),
email varchar(50),
senha varchar(50),
fkPersonagem int,
foreign key (fkPersonagem) references personagemFavorito(idPersonagem)
);

create table quiz(
idQuiz int primary key auto_increment,
nome varchar(50),
acertos int,
qtdPerguntas int default 10,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from quiz;

truncate table usuario;

SELECT acertos 
        FROM quiz 
        WHERE fkUsuario = 2;
