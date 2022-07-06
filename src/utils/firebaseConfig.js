// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_MXjG015cud6bsmnn_2PbWhgBhil8G6E',
  authDomain: 'eecomerce-donatto.firebaseapp.com',
  projectId: 'eecomerce-donatto',
  storageBucket: 'eecomerce-donatto.appspot.com',
  messagingSenderId: '1094745859871',
  appId: '1:1094745859871:web:01aabdc10301ec7720b22a',
  measurementId: 'G-BTDZZVTS6X'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore intialize
const db = getFirestore(app);

export default db;
