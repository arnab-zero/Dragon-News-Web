// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDem0JTc-2GB2jQUmcaqirK--zERsVSvPg",
    authDomain: "dragon-news-web-e1807.firebaseapp.com",
    projectId: "dragon-news-web-e1807",
    storageBucket: "dragon-news-web-e1807.appspot.com",
    messagingSenderId: "517030965748",
    appId: "1:517030965748:web:937a5c6c437f76f4bb89a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
