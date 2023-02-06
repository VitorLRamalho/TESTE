const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', function (req, res) {

  Post.all()
    .then(function (posts) {
      res.render('home', { posts: posts })
    })
});

app.get('/form', function (req, res) {
  res.render('formulario')
});

app.post('/sendForm', function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/')
  }).catch(function (erro) {
    res.send("ERRO!!!" + erro)
  })
});


app.listen(8080, function () {
  console.log("Servidor Rodando na url http://localhost:8080")
});
