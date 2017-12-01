const firebaseAdmin = require('../firebaseAdminSDK');

module.exports = (socket, client) => {
  //connection is up, let's add a simple simple event
  // client.on('message', (message) => {
  //   //log the received message and send it back to the client
  //   console.log('received: %s', message);
  //   const broadcastRegex = /^broadcast\:/;
  //   if (broadcastRegex.test(message)) {
  //     message = message.replace(broadcastRegex, '');
  //     //send back the message to the other clients
  //     socket.clients
  //       .forEach(ws => {
  //         if (ws !== client) {
  //           ws.send(`Hello, broadcast message -> ${message}`);
  //         }
  //       });
  //   } else {
  //     client.send(`Hello, you sent -> ${message}`);
  //   }
  // });

  // all messages from client must be JSON format
  // {
  //   type: 'authenticate' /
  //   data: string, array, objects
  // }

  let messageJSON;
  client.on('message', (message) => {
    try {
      console.log(message);
      messageJSON = JSON.parse(message);
    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: ', messageJSON.data);
      return;
    }

    if (messageJSON.type === 'authenticate') {
      console.log(messageJSON);
      // expect the tokenId from Firebase as data
      firebaseAdmin.auth().verifyIdToken(messageJSON.data.token)
        .then((decodedToken) => {
          console.log(decodedToken);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  client.send('something');
};
