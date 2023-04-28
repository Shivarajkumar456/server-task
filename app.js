const http = require('http');

const server = http.createServer((req, res) => {
  const url=req.url;
  if(url==='/home')
  {
    res.write('<html>');
    res.write('<head> <title> Home Page </title></head>');
    res.write('<body><h1>Welcome to home page</h1></body');
    res.write('<html>')
    return res.end();
  }

  if(url==='/About')
  {
    res.write('<html>');
    res.write('<head> <title> Abbout Page </title></head>');
    res.write('<body><h1>Welcome to About page</h1></body');
    res.write('<html>');
    return res.end()
  }

  if(url==='/Node')
  {
    res.write('<html>');
    res.write('<head> <title> Node Page </title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body');
    res.write('<html>')
    return res.end();
  }
  if(url==='/Random')
  {
    res.write('<html>');
    res.write('<head> <title> Random Page </title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body');
    res.write('<html>')
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First NodeJs Page</title></head>');
  res.write('<body><h1>Hello World!</h1></body>');
  res.write('</html>')
  res.end();
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});