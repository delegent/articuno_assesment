
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDcOuKtZ4hjLKhXLobMm4BZFzzX9nGFVn0",
  authDomain: "articuno-assesment.firebaseapp.com",
  projectId: "articuno-assesment",
  storageBucket: "articuno-assesment.appspot.com",
  messagingSenderId: "465645709397",
  appId: "1:465645709397:web:d4554dc5eed6a214f78cdc"
};


const app = initializeApp(firebaseConfig);

export default getAuth(app);
