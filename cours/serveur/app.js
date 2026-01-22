import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Requête entrante");
  res.write("Coucou les B2 !!!! A demaiiiiiiin");
  res.end();
});

server.listen(1505, "127.0.0.1");
console.log("Server launched at: http://127.0.0.1:1505");
