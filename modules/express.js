const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());
app.set("view engine", "ejs"); // utilizar ejs como engine para html
app.set("views", "src/views");

// middlewares no express:
// A middleware sao funcoes que sao executadas antes de qualquer requisicao que fazemos, e precisamos usar o next() para continuar a rodar a requisicao.
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);
    next();
})

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello, world!</h1>");
});

// requisicao para buscar usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); //deixamos o find em branco para ele trazer todas as infos do user

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", {users: users}); //{users: users} -> serve para passar o objeto para a view.
})

// buscar usuarios por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// requisicao para criar usuario
// enviamos os dados pelo req.body
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar dados 
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    }   catch(error) {
        res.status(500).send(error.message);
    }
});

// deletar usuario
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user);
    }   catch(error) {
        res.status(500).send(error.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}.`));

// copiei do endpoint get e colei aqui, aparentemente nao tem mais utilidade depois que modifiquei o codigo.
// const users = [
//     {
//       name: "Diego",
//       age: 36,
//       email: "diego@gmail.com",
//     },

//     {
//       name: "Lari",
//       age: 28,
//       email: "lari@gmail.com",
//     },
//   ];
