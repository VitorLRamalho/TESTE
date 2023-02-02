const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Templo@2000', {
    host:"localhost",
    dialect: 'mysql'
});

/*sequelize.authenticate().then(function(){  !!!verifica a conexão com a tabela!!!
    console.log("Conexão estabelecida!!!")
}).catch(function(erro){
    console.log("Falha na conexão!!!"+erro)
});*/

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

/*Postagem.create({         !!!adiciona um elemento a tabela postagens!!!
    titulo: "TITULO teste",
    conteudo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
});*/

//Postagem.sync({force: true}); sincroniza dados Postagem na Tabela

const Usuario = sequelize.define('usuarios', {
    nome: {
        type:Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }

});


Usuario.create({
    nome: "Vitor Luiz ",
    sobrenome: "Ramalho",
    idade: 20,
    email: "Email@teste.com",
    profissão: "Programador"
});

//Usuario.sync({force: true}); sincroniza dados Postagem na Tabela
