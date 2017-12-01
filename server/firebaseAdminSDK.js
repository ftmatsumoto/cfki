const admin = require('firebase-admin');

const serviceAccount = require('./firebase-adminsdk.json');
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cfkiapp.firebaseio.com/"
});

module.exports = firebaseAdmin;