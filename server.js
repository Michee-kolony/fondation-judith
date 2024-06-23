
const http = require('http');
const app = require('./app');
const port = 3000;
const server = http.createServer(app);
app.set('port', process.env.PORT || port)
server.listen(process.env.PORT || port);