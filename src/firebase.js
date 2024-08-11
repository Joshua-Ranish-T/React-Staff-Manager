// firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEkxfXwimCC5D78I4TBZHig-AtasOsZTs",
  authDomain: "citcollegesoftware.firebaseapp.com",
  databaseURL:
    "https://citcollegesoftware-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "citcollegesoftware",
  storageBucket: "citcollegesoftware.appspot.com",
  messagingSenderId: "571224951488",
  appId: "1:571224951488:web:46aab40b4c743032fabb25",
  measurementId: "G-GZHTE1HNE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
