const httpServer = require('http-server');

const server = httpServer.createServer({
  root: './', // Set the root directory where your HTML files are located
});

server.listen(8080, "127.0.0.1", () => {
    console.log('Server is running at http://localhost:8080/');
  });
  