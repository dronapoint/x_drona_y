import firebase from 'firebase/app'
import 'firebase/firestore'
import '' 

var firebaseConfig = {
    apiKey: "AIzaSyDh4dmWH6I2Xj47pTKKVsh_XNPDFSdc1Dg",
    authDomain: "drona-o-dash.firebaseapp.com",
    databaseURL: "https://drona-o-dash.firebaseio.com",
    projectId: "drona-o-dash",
    storageBucket: "",
    messagingSenderId: "179866265375",
    appId: "1:179866265375:web:41e637d904e0d882"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore.settings({timestampsInSnapshots: true})
