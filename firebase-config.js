// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrRkBSSsLJkPQLFSetLSvyfaJ0IihZWKg",
    authDomain: "prrx-chat.firebaseapp.com",
    databaseURL: "https://prrx-chat-default-rtdb.firebaseio.com",
    projectId: "prrx-chat",
    storageBucket: "prrx-chat.firebasestorage.app",
    messagingSenderId: "763130047676",
    appId: "1:763130047676:web:e6566f250e81b9c6b574b9",
    measurementId: "G-SQ0GGFJ704"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };