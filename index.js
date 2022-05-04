var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}))


app.get("/",  async function(req,res){
var resultado = await usuario.findAll();
res.json(resultado);
})

app.post("/", async function(req,res){
  var resultado = await usuario.create(req.body);
  res.json(resultado);
})

app.put("/:id", async function(req, res) {
  var resultado = await usuario.findByPk(req.params.id);
  resultado.nome = req.body.nome
  var salvar = await resultado.save()
  res.json(salvar)
})

app.delete("/:id", async function(req, res) {
  var resultado = await usuario.findByPk(req.params.id);
  res.send(resultado)
})

app.get("/:id", async function(req, res) {
  var resultado = await usuario.findByPk(req.params.id);
  res.send(resultado)
})

app.listen(3000,function(){
  console.log("O servidor está bruto de mais");
});

