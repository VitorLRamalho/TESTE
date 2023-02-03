var express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//Conexão com "BD" MySQL
const sequelize = new Sequelize('teste', 'root', 'Templo@2000', {
    host: "localhost",
    dialect: 'mysql'
});


app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081")
});
