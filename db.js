const sqlite3 = require('sqlite3').verbose(); 
// verbose() serve para q o banco 

const db = new sqlite3.Database('./ws.db')
//ws.db é lee que cria
//new : serve para criar um novo objeto sem usar{}


db.serialize(function() {
  //Criar a tabela 
  db.run(`
      CREATE TABLE IF NOT EXISTS  ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        image TEXT,
        title TEXT, 
        category TEXT,
        description TEXT, 
        link TEXT
      );
  `)
  
  //Inserir dado na tabela
  /*
  const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg", 
    "Programação ",
    "Estudo", 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "https://rocketseat.com.br/", 
    ]

  db.run (query , values, function(err) {
    if (err) return console.log(err)

    console.log(this)
  }) */
  
// as ? servem para vc usar um array para quardar os valores
  //Consultar dados na tabela
  db.all( ` SELECT * FROM  ideas` , function(err,rows) {
    if (err) return console.log(err)

    console.log(rows)
  })

// * = tudo , o return para a execução da função

  //Deletar um dado da tabela
// ? = vai ser substituido de algum elemento do array
 


 const apaga = [11] 

  db.run('DELETE FROM ideas WHERE id=?' , apaga , function(err) {
    if (err) return console.log(err)
    console.log("DELETEI", this)
  })



})

//Para exportar o banco ded ados: 

module.exports = db