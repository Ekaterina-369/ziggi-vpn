const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Ziggi VPN core activated. Protected tunnel is ready.\n');
});

server.listen(80, () => {
  console.log('Ziggi VPN is running on port 80');
});