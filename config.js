import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAEBpNpxW-YosgNSt2Vl4tSqoToQ5TjsKU",
    authDomain: "cookingapp-1103a.firebaseapp.com",
    databaseURL: "https://cookingapp-1103.firebaseio.com",
    projectId: "cookingapp-1103a",
    storageBucket: "cookingapp-1103a.appspot.com",
    messagingSenderId: "815027636193",
    appId: "1:815027636193:web:15e24ff6ea1a328c9234a0"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase.firestore();