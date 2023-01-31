//Rotas!!!

var express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seje Bem-vindo ao meu app!");
});

app.get("/Sobre", function(req, res){
    res.send("Sobre o meu app")
})

app.get("/blog", function(req, res){
    res.send("Meu Blog pessoal")
})

app.get("/Ola/:nome/:cargo/:idade", function(req,res){
    res.send("<h1> Ola " +req.params.nome+ "</h1>"+"<h2> Seu cargo é: "+req.params.cargo+"</h2>"+"<h3> Sua idade é: "+req.params.idade+"</h3>");
   
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});
