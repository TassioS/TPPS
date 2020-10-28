const express = require("express")
const app = express()
var methodOverride = require("method-override")
const con = require("../config/db.js")
const cors = require('cors');

//setando as portas
const port = '3000'

// Conectando routers ao banco
app.use(function(req, res, next) {
    req.con = con
    next()
  })

  app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//parse da requisição
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

//Setando router
const watsonRouter = require("../src/routes/watsonRoute")
app.use("/watson", watsonRouter);

app.listen(port, function () {
    console.log(`Rodando na porta ${port}`);
})