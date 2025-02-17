const http = require("http");
const url = require("url");
const todoController = require("./controllers/todoController");
const helloController = require("./controllers/helloController");
const swaggerController = require("./controllers/swaggerController");

const server = http.createServer((req, res) => {
    // CORS-Header setzen
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS-Anfragen direkt mit 204 beantworten (CORS Preflight)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.pathname.split("/")[2];

    if (parsedUrl.pathname === "/hello" && req.method === "GET") {
        helloController.sayHelloGet(req, res, parsedUrl.query);
    } else if (parsedUrl.pathname === "/hello" && req.method === "POST") {
        helloController.sayHelloPost(req, res);
    } else if (parsedUrl.pathname === "/todos" && req.method === "GET") {
        todoController.getTodos(req, res);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "GET") {
        todoController.getTodoById(req, res, id);
    } else if (parsedUrl.pathname === "/todos" && req.method === "POST") {
        todoController.createTodo(req, res);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "PUT") {
        todoController.updateTodo(req, res, id);
    } else if (parsedUrl.pathname.startsWith("/todos/") && req.method === "DELETE") {
        todoController.deleteTodo(req, res, id);
    } else if (parsedUrl.pathname === "/swagger.json" && req.method === "GET") {
        swaggerController.swaggerJSON(req, res);
    } else if (parsedUrl.pathname === "/swagger" && req.method === "GET") {
        swaggerController.swaggerUI(req, res);
    } else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server läuft auf http://localhost:3000");
});
