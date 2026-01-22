import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const user = await readFile("../io/user.json");

const server = createServer((req, res) => {
  console.log("Requête entrante");
  console.log(req.method);
  console.log(req.url);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Homepage du site</h1>");
  } else if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(user);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not found</h1>");
  }

  res.end();
});

server.listen(1505, "127.0.0.1");
console.log("Server launched at: http://127.0.0.1:1505");
