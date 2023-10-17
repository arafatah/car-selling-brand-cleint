// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmL9KlXvep4hgumQiBpoFPrHSMybyPQTg",
  authDomain: "car-selling-001.firebaseapp.com",
  projectId: "car-selling-001",
  storageBucket: "car-selling-001.appspot.com",
  messagingSenderId: "121171468006",
  appId: "1:121171468006:web:7be80586f8432b3605e527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;