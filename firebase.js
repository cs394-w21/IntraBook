import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfmKpUw3RfHG1UIy-uIyZApXpnpGT6qnU",
    authDomain: "orange-team-f4aa1.firebaseapp.com",
    databaseURL: "https://orange-team-f4aa1-default-rtdb.firebaseio.com",
    projectId: "orange-team-f4aa1",
    storageBucket: "orange-team-f4aa1.appspot.com",
    messagingSenderId: "808103127173",
    appId: "1:808103127173:web:0c983c3ec356ecc14361ec",
    measurementId: "G-908NC5H8F6"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };