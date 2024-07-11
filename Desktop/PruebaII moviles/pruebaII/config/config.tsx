// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEAIIeTs6yzpQQnC23OqGULrQ5_mafDk",
  authDomain: "ab-prueba.firebaseapp.com",
  projectId: "ab-prueba",
  storageBucket: "ab-prueba.appspot.com",
  messagingSenderId: "557163405722",
  appId: "1:557163405722:web:b3e52ba711f74270e09a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const database = getDatabase(app);

export {  database };
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});