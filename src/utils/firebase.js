// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA23HS6NMudBUMufHbRfme90gbT87YSmbQ",
  authDomain: "netflix-gpt-aea26.firebaseapp.com",
  projectId: "netflix-gpt-aea26",
  storageBucket: "netflix-gpt-aea26.appspot.com",
  messagingSenderId: "161030422819",
  appId: "1:161030422819:web:ffbd1107911e89290f0c96",
  measurementId: "G-WK2KHVMBJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);