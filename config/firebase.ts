// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.firebaseApiKey,
  authDomain: Constants.firebaseAuthDomain,
  projectId: Constants.firebaseProjectId,
  storageBucket: Constants.firebaseStorageBucket,
  messagingSenderId: Constants.firebaseMessagingSenderId,
  appId: Constants.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
