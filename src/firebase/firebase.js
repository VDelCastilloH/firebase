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
  
  //For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PROJECTID,
    storageBucket: REACT_APP_STORAGEBUCKET,
    messagingSenderId: REACT_APP_MESSAGINGSENDERID,
    appId:REACT_APP_APPID,
    measurementId:REACT_APP_MEASUREMENTID,
  };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDA3ZtzS1jSd6RwBP7BjeUwzAHdUV-3Pvk",
  //   authDomain: "fir-auth-con-react-c8480.firebaseapp.com",
  //   projectId: "fir-auth-con-react-c8480",
  //   storageBucket: "fir-auth-con-react-c8480.appspot.com",
  //   messagingSenderId: "924974782771",
  //   appId: "1:924974782771:web:f5653c4be24bcf14534646",
  //   measurementId: "G-233NFYPS2F"
  // };
  
  // console.log(firebaseConfig);
  // console.log(initializeApp(firebaseConfig));
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const storage = getStorage(app);

//export {app,auth};
