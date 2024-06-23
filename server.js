const http = require('http');
const app = require('./app');
const server = http.createServer(app);
port = 3000;

server.listen(port);