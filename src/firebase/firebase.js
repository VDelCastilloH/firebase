// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID,
  REACT_APP_MEASUREMENTID} = process.env

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId:REACT_APP_APPID,
  measurementId:REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage(app);

