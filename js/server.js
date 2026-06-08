 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCYXEprpfcOnjr-J9RyjUsr9LleV4ycArQ",
   authDomain: "talekschool-fea61.firebaseapp.com",
   projectId: "talekschool-fea61",
   storageBucket: "talekschool-fea61.firebasestorage.app",
   messagingSenderId: "773518138800",
   appId: "1:773518138800:web:185a9f9121aca0c8a64a75"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 console.log( app.name);