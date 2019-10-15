const express = require('express');
const app = express();
app.use(express.static(__dirname));
const server = require('http').createServer(app);
server.listen(80, function () {
  console.log('Server listening at port %d', 80);
});