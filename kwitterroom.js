// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3Hj_GmsyDMCBDmjqFFIx2b3vqkkGvutc",
    authDomain: "school-chat-fd67b.firebaseapp.com",
    databaseURL: "https://school-chat-fd67b-default-rtdb.firebaseio.com",
    projectId: "school-chat-fd67b",
    storageBucket: "school-chat-fd67b.appspot.com",
    messagingSenderId: "545381606558",
    appId: "1:545381606558:web:900bc5a1863a855a08878f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();