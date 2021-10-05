// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const authConfig = {
  apiKey: "AIzaSyC249Kl_d4bXx1Mpi_fP-_BJL-3Avgq3M0",
  authDomain: "fir-react-auth-3551f.firebaseapp.com",
  projectId: "fir-react-auth-3551f",
  storageBucket: "fir-react-auth-3551f.appspot.com",
  messagingSenderId: "1076917574300",
  appId: "1:1076917574300:web:20cca0879a7a91ebdfeb59",
  measurementId: "G-Q5DS3B27EZ"
};

// Initialize Firebase
const app = initializeApp(authConfig);
const analytics = getAnalytics(app);

