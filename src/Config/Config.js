import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrekGQlQJNg_V6ED4YXg5yXD_hqJXIJvQ",
    authDomain: "react-todo-app-with-firebase01.firebaseapp.com",
    projectId: "react-todo-app-with-firebase01",
    storageBucket: "react-todo-app-with-firebase01.appspot.com",
    messagingSenderId: "364194499780",
    appId: "1:364194499780:web:ce283c1af7f343dc5d8d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);