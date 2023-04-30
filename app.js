const http = require('http');
const file = require('./files');

console.log(file.message)

const server = http.createServer(file.handler);

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});