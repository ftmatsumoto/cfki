import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC0hwzgKuxJAL1nTBdxiPs2KJSAWWPi3Q8",
  authDomain: "cfkiapp.firebaseapp.com",
  databaseURL: "https://cfkiapp.firebaseio.com",
  projectId: "cfkiapp",
  storageBucket: "cfkiapp.appspot.com",
  messagingSenderId: "301155372781"
};

export const firebaseApp = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();
