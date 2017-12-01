const express = require('express');
const WebSocket = require('uws');
const http = require('http');
const path = require('path');

const db = require('./server/database/helper.js');
const handleRoutes = require('./server/routes/routes.js');
const firebaseAdmin = require('./server/firebaseAdminSDK');

const app = express()

app.use(express.static(path.join(__dirname, '/build')));
app.use((req, res) => res.sendFile(path.join(__dirname, '/build/index.html')));
//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const socket = new WebSocket.Server({
  server: server,
  verifyClient: (info, cb) => {
    // console.log(info.req.url);
    let token = info.req.url.slice(1);
    if (!token)
      cb(false, 401, 'Unauthorized')
    else {
      firebaseAdmin.auth().verifyIdToken(token)
        .then((decodedToken) => {
          console.log(decodedToken);
          cb(true);
        })
        .catch((error) => {
          console.log(error);
          cb(false, 401, 'Unauthorized');
        });
    }
  }
});

socket.on('connection', (client) => {

  client.isAlive = true;
  client.on('pong', () => {
    client.isAlive = true;
  });

  handleRoutes(socket, client);

  client.on('error', (error) => {
    console.log("Connection Error: " + error.toString());
  });


  client.on('close', () => {
    console.log('Connection Closed');
  });

});

setInterval(() => {
  console.log(socket.clients);
  socket.clients.forEach((client) => {
    if (!client.isAlive) return client.terminate();
    client.isAlive = false;
    client.ping(null, false, true);
  });
}, 30000);

//start our server
server.listen(process.env.PORT || 8128, () => {
  console.log(`Server running on port ${server.address().port}`);
});