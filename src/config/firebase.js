import * as firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD_v5CdI1122_8MNsuA7hC_uoCkJwfkTSg",
    authDomain: "react-on-firebase-with-todo.firebaseapp.com",
    databaseURL: "https://react-on-firebase-with-todo-default-rtdb.firebaseio.com",
    projectId: "react-on-firebase-with-todo",
    storageBucket: "react-on-firebase-with-todo.appspot.com",
    messagingSenderId: "369579736450",
    appId: "1:369579736450:web:426bde9063c0109f0aa39b",
    measurementId: "G-RNYN2GNN0C"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export default firebase.initializeApp(firebaseConfig)
