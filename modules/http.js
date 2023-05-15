// Criando servidor:
// 1 - importar http
const http = require("http");

// 2 - escolher porta
const port = 8080;

// 3 - criar servidor em si 
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Teste ok!</h1>");
    }

    if (req.url === "/users") {
        const users = [
            {
                name: 'Diego',
                age: 36,
                email: 'diego@gmail.com'
            },

            {
                name: 'Lari',
                age: 28,
                email: 'lari@gmail.com'
            }
        ]

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));    //colocamos stringfy pq temos que enviar uma string para o front.
    }
});

// rodar servidor
server.listen(port, () => console.log(`Rodando na porta ${port}.`));