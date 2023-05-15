const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
// Primeiro parametro o path, segundo parametro uma callback.
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if(error) {

//         // O return serve para sair da funcao se o if for true, nao execu-
//         // tando a linha de baixo (console.log("Pasta criada."))
//         return    console.log("Erro: ", error);
//     }

//     console.log("Pasta criada.");
// });

// Criar ou sobrescrever arquivo
// Primeiro parametro o path, segundo parametro o conteudo, e em terceiro uma callback
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "hello, node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso.");

    // Para adicionar conteudo a um arquivo existente
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello world",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivos
    // Primeiro parametro o path, segundo parametro o sistema de caracteres e depois uma callback
    // com error e data (que e o conteudo do arquivo que esta sendo lido)
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);
