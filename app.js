const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('My name is Shivarajkumar');
  console.log('My name is Shivarajkumar');
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});