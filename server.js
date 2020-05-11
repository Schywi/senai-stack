// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();
const db = require('./db');

/* Automatização dos trem */
// cpnfigurar arquivos estaticos (css,scripts,imagens)
// com o static public o express entende que o a pasta pertençe a raiz
server.use(express.static("public"));


//Habilitar uso do req.body
server.use(express.urlencoded({extended: true}))



//configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server, 
  noCache: true, 
});

// crieu uma rota /
// e capturo o pedido do cliente para responder
// Parei na aula   hora e 10 minutos

// liguei meu servidor na porta 3000


server.get("/", function(req,res) {

  db.all( ` SELECT * FROM  ideas` , function(err,rows) {
    if (err) {
      console.log(err);
      return  res.send("Erro no banco de dados")
    } 
    
    const reversedIdeas = [...rows].reverse()

    const lastIdeas = []
    for(let idea of reversedIdeas)  {
        if(lastIdeas.length < 2) {
          lastIdeas.push(idea)
        }}
    return res.render("index.html",{ideas: lastIdeas});

    })
});

server.get("/ideias", function(req,res) {
  
  db.all( ` SELECT * FROM  ideas` , function(err,rows) {
      if (err) {
        console.log(err);
        return  res.send("Erro no banco de dados")
      } 



  const reversedIdeas = [...rows].reverse();

  return res.render("ideias.html", {ideas: reversedIdeas});
});
});


server.get("/index", function(req,res) {


   return res.sendFile("Heloo world")
});




server.post ("/" , function(req,res) {
  //inicio cadastrar no sistema
  //Inserir dado na tabela
  const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `
// Pegar valores não estaticos que serão fornecidos por alguem
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
    ]

  db.run (query , values, function(err) {
    if (err) {
      console.log(err);
      return  res.send("Erro no banco de dados")
    } 
    // fim cadastreo
    //continuando dps do cadasntro
    //redirecionamento: 
    return res.redirect("/ideias")
  })
})





server.listen(3000);




