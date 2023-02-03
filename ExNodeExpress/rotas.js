const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Conexão com "BD" MySQL
const sequelize = new Sequelize('teste', 'root', 'Templo@2000', {
    host: "localhost",
    dialect: 'mysql'
});

//Rotas
app.get('/form', function(req, res){
  res.render('formulario')
});

app.post('/sendForm', function(req, res){
  res.send('Formulario Recebido!!!')
});


app.listen(8080, function () {
    console.log("Servidor Rodando na url http://localhost:8080")
});
