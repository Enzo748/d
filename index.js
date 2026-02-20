const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Servidor Railway funcionando 🚀");
});

server.listen(process.env.PORT);
